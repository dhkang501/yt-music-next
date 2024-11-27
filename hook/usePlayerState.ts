import {Song} from '@/app/types';
import {create} from 'zustand';

interface PlayerState {
  isVisiblePlayer: boolean; //플레이어 UI 표시 여부
  setIsVisiblePlayer: (isVisiblePlayer: boolean) => void; //isVisiblePlayer 값 업데이트
  activeSong?: Song | null; // 현재 재생 중인 곡
  prevPlayerQueue: Song[]; //이전 곡 목록 (뒤로가기 시 재생할 목록)
  nextPlayerQueue: Song[]; //다음 곡 목록 (앞으로 재생할 목록)
  //기능들 (재생, 이전곡, 다음곡)
  addSongList: (addSongList: Song[]) => void; // 새로운 노래 목록을 재생 큐에 추가하는 함수
  playNext: () => void; // 다음 곡으로 이동하는 함수
  playBack: () => void; //이전 곡으로 이동하는 함수
}

const usePlayerState = create<PlayerState>(set => ({
  //zustand를 이용한 상태 관리
  isVisiblePlayer: true,
  setIsVisiblePlayer: (isVisiblePlayer: boolean) => set({isVisiblePlayer}),
  activeSong: null,
  prevPlayerQueue: [],
  nextPlayerQueue: [],
  // 새로운 곡 목록을 재생 큐에 추가하고, 첫번째 곡을 재생
  addSongList: (songList: Song[]) =>
    set(prev => {
      const prevSong = prev.activeSong; // 현재 재생 중인 곡
      const cloneSongList = [...songList]; //songList 복사: 불변성 유지, 아래 사용된 splice가 불변성이 유지되는 함수가 아님
      const currentSong = cloneSongList.splice(0, 1)?.[0]; //첫 곡 가져오기 //값이 있을경우 0번째 인덱스 부터 1개 요소 제거하고 제거된 요소 중 [0]번째를 반환, splice결과가 빈배열 null undefined 이면 undefined 반환
      return {
        activeSong: currentSong, //첫 곡을 현재 곡으로 설정
        prevPlayerQueue: prevSong
          ? [prevSong, ...prev.prevPlayerQueue]
          : prev.prevPlayerQueue, //현재 곡을 이전 곡 큐에 추가
        nextPlayerQueue: [...cloneSongList],
        isVisiblePlayer: true,
      };
    }),
  playNext: () =>
    set(prev => {
      const currentSong = prev.activeSong;
      const nextSrc = prev.nextPlayerQueue.splice(0, 1)?.[0];
      return {
        activeSong: nextSrc,
        nextPlayerQueue: prev.nextPlayerQueue,
        prevPlayerQueue: [
          ...(currentSong ? [currentSong] : []),
          ...prev.prevPlayerQueue,
        ],
      };
    }), //다음 트랙에 있는 노래 가져와서 현재 트랙에 넣음, 다음이 없는 경우 넘겨주지 않음
  playBack: () =>
    set(prev => {
      const currentSong = prev.activeSong; //현재 재생중인 노래
      const preSrc = prev.prevPlayerQueue.splice(0, 1)?.[0];
      return {
        activeSong: preSrc,
        nextPlayerQueue: [
          ...(currentSong ? [currentSong] : []), //현재 재생중인 노래 있다면 저장 아니면 배열
          ...prev.nextPlayerQueue,
        ],
        prevPlayerQueue: prev.prevPlayerQueue,
      };
    }),
}));

export default usePlayerState;
