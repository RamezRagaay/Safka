'use client'
import { Button } from '@/components/ui/button'
import { logout } from '@/services/provider'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import React from 'react'

const Page = () => {
  const router = useRouter();
  return (
    <>
      <Button variant="destructive" className="w-24 h-24 m-4"  asChild
        onClick={ async () =>{
          await logout;
          Cookies.remove("provider-token");
          Cookies.remove("provider-name");
          Cookies.remove("provider-id");
          Cookies.remove("role");
          router.push("/");    
        }}
      >
        <div className='flex flex-col justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path stroke-linejoin="round" d="M13.477 21.245H8.34a4.918 4.918 0 0 1-5.136-4.623V7.378A4.918 4.918 0 0 1 8.34 2.755h5.136"/><path stroke-miterlimit="10" d="M20.795 12H7.442"/><path stroke-linejoin="round" d="m16.083 17.136l4.404-4.404a1.04 1.04 0 0 0 0-1.464l-4.404-4.404"/></g></svg>
          <p>تسجيل الخروج</p>
        </div>
      </Button>
    </>
  )
}

export default Page