import React from 'react'
import { Image } from 'next/image';
import Header from '@/components/pages/home/Header';
import SecondSec from '@/components/pages/home/secondSec';
import ThirdSec from './../../components/pages/home/thirdSec';
const Page = () => {
  return (
    <div className='dark:bg-primary-dark'>
      <Header/>
      <SecondSec/>
      <ThirdSec/>
    </div>
  )
}

export default Page