'use client';
import React from 'react';
import usePlayerState from '@/hook/usePlayerState';

const PlayerWrapper = () => {
  const {isVisiblePlayer} = usePlayerState();

  if (!isVisiblePlayer) return null;

  return (
    <div className="fixed bottom-0 h-[72px] w-full bg-neutral-900">
      PlayerWrapper
    </div>
  );
};

export default PlayerWrapper;
