import {getPlaylistById} from '@/lib/dummyData';
import {getRandomElementArray} from '@/lib/utils';
import {permanentRedirect} from 'next/navigation';
import React from 'react';
import HeaderBgChanger from '@/components/HeaderBgChanger';

interface PlaylistPageProps {
  searchParams: {
    list: string;
  };
}

const page = async (props: PlaylistPageProps) => {
  const playlist = await getPlaylistById(Number(props.searchParams.list));
  if (!playlist) permanentRedirect('/');
  const imageSrc = getRandomElementArray(playlist.songList)?.imageSrc;
  console.log('>>>>>>>>>>> ', imageSrc);

  return (
    <div>
      <HeaderBgChanger imageSrc={imageSrc} />
      playlist{props.searchParams.list}
    </div>
  );
};

export default page;
