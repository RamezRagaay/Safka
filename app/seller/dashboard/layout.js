"use client"
import Sidebar from "@/components/shared/sidebar";
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
    const pathname = usePathname();
    return (
      <div className="min-h-screen flex">
        <Sidebar pathname={pathname}/>
        <div className='flex-grow'>
          {children}
        </div>
      </div>
  );
}
