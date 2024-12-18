'use client';
import Image from 'next/image';
import React from 'react';
import {getRandomElementArray} from '@/lib/utils';
import {useRouter} from 'next/navigation';
import {MdMoreVert} from 'react-icons/md';
import {FiPlay} from 'react-icons/fi';
import usePlayerState from '@/hook/usePlayerState';

const PlayListCard = ({playlist = {}} = {}) => {
  const {addSongList} = usePlayerState();
  const {push} = useRouter();
  const {id, owner, playlistName, songList = []} = playlist ?? {};

  const songListLen = songList?.length;
  const imgSrc = getRandomElementArray(songList)?.imageSrc;

  const onClickCard = () => {
    push(`/playlist?list=${id}`);
  };
  const onClickPlay = (e) => {
    e.stopPropagation(); // 상위 컴포넌트로 이벤트 전달이 멈춤
    addSongList(songList);
  };

  return (
    <article className="h-[240px] cursor-pointer group">
      <section onClick={onClickCard} className="relative h-[136px]">
        <Image
          src={imgSrc}
          fill={true}
          alt="thumbnail"
          className="object-cover rounded-md"
        />
        <div className="hidden relative group-hover:block bg-gradient-to-b from-[rgba(0,0,0,0.7)] top-0 w-full h-[136px]">
          <div className="absolute top-2 right-4">
            <MdMoreVert size={20} />
          </div>
          <div
            onClick={onClickPlay}
            className="absolute bottom-4 right-4 flex items-center justify-center
           transform-gpu transition-transform hover:scale-110 
           bg-[rgba(0,0,0,0.7)] w-[45px] h-[45px] rounded-full
           hover:bg-[rgba(0,0,0,0.9)] pl-[1.5px]">
            <FiPlay size={20} color="red" />
          </div>
        </div>
      </section>
      <section className="mt-2">
        <div>{playlistName}</div>
        <div className="text-neutral-500">{`${owner} - 트랙 ${songListLen}`}</div>
      </section>
    </article>
  );
};

export default PlayListCard;
