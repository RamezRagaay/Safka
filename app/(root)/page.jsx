import ProductCard from '@/components/atoms/ProductCard'
import CategoriesSwiper from '@/components/pages/home/CategoriesSwiper'
import HeaderSwiper from '@/components/pages/home/HeaderSwiper'
import OneCategorySwiper from '@/components/pages/home/OneCategorySwiper'
import React from 'react'

const Page = () => {
  return (
    <div className=''>
      <HeaderSwiper />
      <CategoriesSwiper/>
      <OneCategorySwiper title={"أكثر المبيعات"} />
      <OneCategorySwiper title="الكترونيات"/>
      <OneCategorySwiper title="المنتجات"/>
      <OneCategorySwiper title="المتاجر"/>
    </div>
  )
}

export default Page