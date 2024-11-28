'use client';
import React, {useCallback, useEffect} from 'react';
import {Slider as PlayerSlider} from '@/components/ui/playerSlider';
import {useAudio} from 'react-use';
import {
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoShuffle,
  IoVolumeHighOutline,
} from 'react-icons/io5';
import {AiFillCaretUp, AiOutlinePause} from 'react-icons/ai';
import usePlayerState from '@/hook/usePlayerState';
import {ClipLoader} from 'react-spinners';
import {RiPlayFill} from 'react-icons/ri';
import Image from 'next/image';
import {RxLoop} from 'react-icons/rx';

const PlayerContent = () => {
  const {activeSong, prevPlayerQueue, nextPlayerQueue, playBack, playNext} =
    usePlayerState();

  const [audio, state, controls, ref] = useAudio({
    src: activeSong?.src, // /music/CattyBGM - 고양이 코.mp4
    autoPlay: true,
  });

  const isLoading = activeSong?.src && state.buffered?.length === 0; //배열 객채를 가지고 있을때는 1(false)

  const onClickPrevBtn = () => {
    if (state.playing && state.time > 10) {
      controls.seek(0);
      return;
    }
    if (prevPlayerQueue.length === 0) return;
    playBack();
  };
  const onClickStartBtn = () => {
    if (activeSong) {
      controls.play();
    } else {
      playNext();
    }
  };
  const onClickPauseBtn = () => {
    controls.pause();
  };

  //의존성 배열 dependency 처리 추가
  const onClickNextBtn = useCallback(() => {
    if (nextPlayerQueue.length === 0) {
      controls.pause();
    } else {
      playNext();
    }
  }, [controls, playNext, nextPlayerQueue]);

  // 음악 거의 끝나는 시점에 다음 음악으로 넘어가기
  useEffect(() => {
    ref?.current?.addEventListener('ended', onClickNextBtn);
    return () => {
      ref?.current?.removeEventListener('ended', onClickNextBtn);
    };
  }, [ref, onClickNextBtn]);

  return (
    <div className="h-full w-full relative">
      <div className="absolute top-[-16px] w-full">
        <PlayerSlider
          className="w-full"
          defaultValue={[0]}
          value={[state.time]}
          onValueChange={value => {
            controls.seek(value);
          }}
          max={state.duration}
        />
      </div>
      {audio}
      <section className="flex flex-row justify-between items-center w-full h-full px-2 lg:px-6">
        <div className=" flex flex-row items-center gap-1 lg:gap-8">
          <IoPlaySkipBackSharp
            size={24}
            className="cursor-pointer"
            onClick={onClickPrevBtn}
          />
          {isLoading ? (
            <ClipLoader color="#fff" />
          ) : state.playing ? (
            <AiOutlinePause
              size={40}
              className=" cursor-pointer"
              onClick={onClickPauseBtn}
            />
          ) : (
            <RiPlayFill
              size={40}
              className=" cursor-pointer"
              onClick={onClickStartBtn}
            />
          )}
          <IoPlaySkipForwardSharp
            size={24}
            className=" cursor-pointer"
            onClick={onClickNextBtn}
          />
        </div>
        <article>
          <div className=" flex flex-row gap-4 items-center">
            <div className=" relative w-[40px] h-[40px]">
              {/* TODO: 반응형 처리 필요 */}
              <Image
                fill
                className="object-cover"
                src={activeSong?.imageSrc}
                alt="img"></Image>
            </div>
            <div className="flex flex-col">
              <div>{activeSong?.name}</div>
              <div className=" text-neutral-500 text-[14px]">
                {activeSong?.channel} • 조회수 7.8만회 • 좋아요 1.7천개
              </div>
            </div>
          </div>
        </article>
        <div className="flex flex-row gap-2">
          <div className=" hidden lg:flex flex-row gap-2 ">
            <IoVolumeHighOutline size={24} className=" cursor-pointer" />
            <IoShuffle size={24} className=" cursor-pointer" />
            <RxLoop size={24} className=" cursor-pointer" />
          </div>
          <div>
            <AiFillCaretUp size={24} className=" cursor-pointer" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlayerContent;
