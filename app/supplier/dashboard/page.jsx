'use client'
import React from 'react'
import SellerDashboard from '@/components/pages/seller/dashboard/SellerDashboard';
import Cookies from 'js-cookie';
import dynamic from 'next/dynamic'
 
const Username = dynamic(() => import('@/components/atoms/greeting'), { ssr: false })
const Page = () => {
    const name = Cookies.get("provider-name");
  return (
    <>
        <Username />
        <SellerDashboard/>
    </>
)
}

export default Page