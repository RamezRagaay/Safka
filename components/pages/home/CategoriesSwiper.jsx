'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

// import required modules
import { FreeMode, Navigation } from 'swiper/modules';

const CategoriesSwiper = () => {
  return (
    <div className='container my-12 mx-auto'>
			<p className='text-3xl font-bold m'>التصنيفات :</p>
      <Swiper
        slidesPerView={5}
        spaceBetween={40}
        freeMode={true}
				navigation={true}
        modules={[FreeMode, Navigation]}
        className="h-24 m-12 container mx-auto "
      >
        <SwiperSlide >
					<div className='flex justify-around items-center h-full border-2'>
						<p className='text-2xl font-bold '>أدوات رياضية</p>
					</div>
				</SwiperSlide>
        <SwiperSlide >
					<div className='flex justify-around items-center h-full border-2'>
						<p className='text-2xl font-bold '>ألكترونيات</p>
					</div>
				</SwiperSlide>
        <SwiperSlide >
					<div className='flex justify-around items-center h-full border-2'>
						<p className='text-2xl font-bold '>ملابس رجالي</p>
					</div>
				</SwiperSlide>
        <SwiperSlide >
					<div className='flex justify-around items-center h-full border-2'>
						<p className='text-2xl font-bold '>ملابس سيدات</p>
					</div>
				</SwiperSlide>
        <SwiperSlide >
					<div className='flex justify-around items-center h-full border-2'>
						<p className='text-2xl font-bold '>ملابس اطفال</p>
					</div>
				</SwiperSlide>
        <SwiperSlide >
					<div className='flex justify-around items-center h-full border-2'>
						<p className='text-2xl font-bold '>مواد غذائية</p>
					</div>
				</SwiperSlide>
        <SwiperSlide >
					<div className='flex justify-around items-center h-full border-2'>
						<p className='text-2xl font-bold '>مستلزمات</p>
					</div>
				</SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default CategoriesSwiper