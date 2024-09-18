// "use client"
// import CategoriesSwiper from '@/components/pages/home/CategoriesSwiper'
// import HeaderSwiper from '@/components/pages/home/HeaderSwiper'
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
      {/* <HeaderSwiper /> */}
      {/* <CategoriesSwiper/> */}
      {/* <OneCategorySwiper title={"أكثر المبيعات"} />
      <OneCategorySwiper title="الكترونيات"/>
      <OneCategorySwiper title="المنتجات"/>
      <OneCategorySwiper title="المتاجر"/> */}
    </div>
  )
}

export default Page