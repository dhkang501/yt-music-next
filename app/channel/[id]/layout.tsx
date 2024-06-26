import React, { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode;
}

const layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div>
        layout 먼저
        {children}
    </div>
  )
}

export default layout