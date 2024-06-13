import React, { ReactNode } from 'react'
import Logo from '@/components/elements/Logo'
import Navigator from '@/components/elements/Navigator'

interface SidebarProps {
    children: ReactNode;
  }

const Sidebar: React.FC<SidebarProps> = ({children}) => {
  return (
    <div className='flex h-full'>
        <nav className='w-[240px] border-r-[1px] border-netural-600'>
            <div className='p-[24px]'>
                <Logo/>
            </div>
            <div>
                <Navigator/>
            </div>
        </nav>
        {/* flex-1로 너비값 100% 사용할 수 있음 */}
        <div className='flex-1'>{children}</div>
    </div>
  )
}

export default Sidebar