import React from 'react'
import PhotosSection from './PhotosSection';
import Counter from './Counter';
const ProductInfo = () => {
  return (
    <div className='w-full bg-white mt-16 p-10 flex xl:justify-start xl:flex-row sm:flex-col sm:items-start '>
        <PhotosSection images={["/product-23.jpg", "/product-24.jpg", "/product-25.jpg"]}/>
        <div>
            <div>
                <h2 className='text-2xl font-bold '>اسم المنتج</h2>
                <p>تقيم المنتج</p>
            </div>
            <div className='flex items-centers gap-4'>
                <h4 className='font-bold text-red-600'>1,000 ر.س</h4>
                <del className='text-xs relative top-2'>1,250 ر.س</del>
            </div>
            <Counter/>
        </div>
        
    </div>
  )
}

export default ProductInfo