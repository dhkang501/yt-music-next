'use client';
import React from 'react';
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

const PlayerContent = () => {
  const {activeSong} = usePlayerState();
  const [audio, state, controls, ref] = useAudio({
    src: activeSong.src, // /music/CattyBGM - 고양이 코.mp4
    autoPlay: true,
  });

  const isLoading = activeSong?.src && state.buffered?.length === 0; //배열 객채를 가지고 있을때는 1(false)

  const onClickPreBtn = () => {};
  const onClickStartBtn = () => {
    controls.play();
  };
  const onClickPauseBtn = () => {
    controls.pause();
  };
  const onClickNextBtn = () => {};

  return (
    <div className="h-full w-full relative">
      <div className="absolute top-[-16px] w-full">
        <PlayerSlider
          className="w-full"
          defaultValue={[0]}
          value={[state.time]}
          onValueChange={value => {
            controls.seek(value);
            console.log('value:>> ', value);
          }}
        />
      </div>
      {audio}
      <section className="flex flex-row justify-between items-center w-full h-full px-2 lg:px-6">
        <div className="flex flex-row items-center gap-1 lg:gap-8">
          <IoPlaySkipBackSharp
            size={24}
            className="cursor-pointer"
            onClick={onClickPreBtn}
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
        <article></article>
        <div></div>
      </section>
    </div>
  );
};

export default PlayerContent;
