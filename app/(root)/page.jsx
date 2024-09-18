import CategoryCarousel from '@/components/pages/home/CategoryCarousel'
import Header from '@/components/pages/home/Header'
import HotDeals from '@/components/pages/home/HotDeals'
import React from 'react'


const Page = () => {
  return (
    <div className=''>
      <Header/>
      <CategoryCarousel />
      <HotDeals/>
    </div>
  )
}

export default Page