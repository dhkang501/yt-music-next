import React from 'react';
import {Slider as PlayerSlider} from '@/components/ui/playerSlider';
import {useAudio} from 'react-use';
import usePlayerState from '@/hook/usePlayerState';

const PlayerContent = () => {
  const [audio, state, controls, ref] = useAudio({
    src: null, // /music/CattyBGM - 고양이 코.mp4
    autoPlay: true,
  });
  return (
    <div className="h-full w-full relative">
      <div className="absolute top-[-16px] w-full">
        <PlayerSlider />
      </div>
      {audio}
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={controls.pause}>Pause</button>
      <button onClick={controls.play}>Play</button>
      <br />
      <button onClick={controls.mute}>Mute</button>
      <button onClick={controls.unmute}>Un-mute</button>
      <br />
      <button onClick={() => controls.volume(0.1)}>Volume: 10%</button>
      <button onClick={() => controls.volume(0.5)}>Volume: 50%</button>
      <button onClick={() => controls.volume(1)}>Volume: 100%</button>
      <br />
      <button onClick={() => controls.seek(state.time - 5)}>-5 sec</button>
      <button onClick={() => controls.seek(state.time + 5)}>+5 sec</button>
    </div>
  );
};

export default PlayerContent;
