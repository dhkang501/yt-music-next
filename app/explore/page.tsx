import React from 'react';
import Catagory from '@/app/explore/components/Category';
import PagePadding from '@/components/PagePadding';
import {getAllPlaylist, getSongListTop10} from '@/lib/dummyData';
import PlayListCarousel from '@/components/PlayListCarousel';
import SongListCarousel from '@/components/SongListCarousel';

const page = async () => {
  const [playlistArray, songListTop10] = await Promise.all([
    getAllPlaylist(),
    getSongListTop10(),
  ]);

  return (
    <PagePadding>
      <div className="mt-4"></div>
      <Catagory />
      <div className="mt-20"></div>
      <PlayListCarousel playlistArray={playlistArray} title="새 앨범 및 싱글" />
      <div className="mt-20"></div>
      <SongListCarousel songListTop10={songListTop10} title="인기곡" />
    </PagePadding>
  );
};

export default page;
