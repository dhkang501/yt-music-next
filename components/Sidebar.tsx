'use client';
import React, {ReactNode} from 'react';
import Logo from '@/components/elements/Logo';
import Navigator from '@/components/elements/Navigator';
import usePlayerState from '@/hook/usePlayerState';
import {cn} from '@/lib/utils';

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({children}) => {
  const {isVisiblePlayer} = usePlayerState();
  return (
    <div
      className={cn(
        'flex flex-row h-full',
        isVisiblePlayer && 'h-[calc(100vh-72px)]',
      )}>
      <nav className="w-[240px] hidden lg:block border-r-[1px] border-netural-600">
        <div className="p-[24px]">
          <Logo />
        </div>
        <div>
          <Navigator />
        </div>
      </nav>
      {/* flex-1로 너비값 100% 사용할 수 있음 */}
      <div className="w-full lg:w-[calc(100%-240px)]">{children}</div>
    </div>
  );
};

export default Sidebar;
