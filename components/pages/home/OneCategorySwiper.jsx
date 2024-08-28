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
import ProductCard from '@/components/atoms/ProductCard';

const OneCategorySwiper = ({title}) => {
  return (
    <div className='container my-12 mx-auto'>
			<p className='text-3xl font-bold m'>{title} :</p>
      <Swiper
        slidesPerView={5}
        spaceBetween={40}
        freeMode={true}
				navigation={true}
        modules={[FreeMode, Navigation]}
        className="m-12 container mx-auto "
      >
        <SwiperSlide >
					<ProductCard/>
        </SwiperSlide>
        <SwiperSlide >
					<ProductCard/>
        </SwiperSlide>
        <SwiperSlide >
					<ProductCard/>
        </SwiperSlide>
        <SwiperSlide >
					<ProductCard/>
        </SwiperSlide>
        <SwiperSlide >
					<ProductCard/>
        </SwiperSlide>
        <SwiperSlide >
					<ProductCard/>
        </SwiperSlide>
        <SwiperSlide >
					<ProductCard/>
        </SwiperSlide>
        <SwiperSlide >
					<ProductCard/>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default OneCategorySwiper