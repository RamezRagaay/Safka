'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import "swiper/css/effect-fade";

import '../../../app/globals.css';

// import required modules
import { Pagination , Navigation, Autoplay , EffectFade} from 'swiper/modules';

const HeaderSwiper = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}
        navigation={true}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
        effect={'fade'}
        speed={700}
        loop={true}
        modules={[Pagination,Autoplay,EffectFade,Navigation]}
        className=" h-96 "
      >
        <SwiperSlide>
          <div className='flex justify-around items-center h-full bg-slate-400'>
            <p className='text-5xl font-bold '>1 تفاصيل الاعلان </p>
            <p className='text-5xl font-bold '>1 صورة الاعلان</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-around items-center h-full bg-slate-500'>
            <p className='text-5xl font-bold '>2 تفاصيل الاعلان </p>
            <p className='text-5xl font-bold '>2 صورة الاعلان</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-around items-center h-full bg-slate-600'>
            <p className='text-5xl font-bold '>3 تفاصيل الاعلان </p>
            <p className='text-5xl font-bold '>3 صورة الاعلان</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HeaderSwiper
