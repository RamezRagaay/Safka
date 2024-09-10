'use client'

import Sidebar from "@/components/shared/sidebar"
import { usePathname } from 'next/navigation'

export default function RootLayout({ children }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      <Sidebar pathname={pathname} />
      <div className='flex-grow overflow-y-auto pb-16 sm:pb-0'>
        <main className="p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}