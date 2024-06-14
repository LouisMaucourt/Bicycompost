import React, { ReactNode } from 'react'
import Lenis from '../components/Lenis';

interface LayoutProps {
  children?: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between font-content antialiased">
      <Lenis>
        <main className="mb-auto dark:bg-gray-900">{children}</main>
      </Lenis>
    </div>
  )
}

export default Layout
