import React from 'react';
import Catagory from '@/app/explore/components/Category';
import PagePadding from '@/components/PagePadding';
import {getAllPlaylist} from '@/lib/dummyData';
import PlayListCarousel from '@/components/PlayListCarousel';

const page = async () => {
  const playlistArray = await getAllPlaylist();
  return (
    <PagePadding>
      <div className="mt-4"></div>
      <Catagory />
      <PlayListCarousel playlistArray={playlistArray} title="새 앨범 및 싱글" />
    </PagePadding>
  );
};

export default page;
