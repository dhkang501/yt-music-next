import Category from '@/app/(site)/components/Category';
import PagePadding from '@/components/PagePadding';
import PlayListCarousel from '@/components/PlayListCarousel';
import UserIcon from '@/components/UserIcon';
import {dummyPlaylistArray} from '@/lib/dummyData';

const home = async () => {
  const dummyPlaylistArray1 = [...dummyPlaylistArray];
  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-9"></div>
        <Category />
        <div className="mt-12"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray1]}
          title="다시듣기"
          subTitle="두두"
          Thumbnail={
            <div className="w-[56px] h-[56px]">
              <UserIcon size={'lg'} />
            </div>
          }
        />
      </div>
    </PagePadding>
  );
};

export default home;
