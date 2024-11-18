'use client';
import useUIState from '@/hook/useUIState';
import React, {useEffect} from 'react';

const HeaderBgChanger = ({imageSrc}) => {
  const {setHeaderImageSrc} = useUIState();

  useEffect(() => {
    if (imageSrc) setHeaderImageSrc(imageSrc);
  }, [imageSrc]);
  return <></>;
};

export default HeaderBgChanger;
