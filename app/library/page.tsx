import PagePadding from '@/components/PagePadding';
import React from 'react';
import Category from './components/Category';
import PlayListCard from '@/components/PlayListCard';
import {dummyPlaylistArray} from '@/lib/dummyData';
import {getRandomElementArray} from '@/lib/utils';

const page = () => {
  return (
    <PagePadding>
      <div className="mt-9"></div>
      <Category />
      <div className="mt-12"></div>
      <section className="grid grid-cols-3 gap-6 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
      </section>
      <div className="mt-12"></div>
    </PagePadding>
  );
};

export default page;
