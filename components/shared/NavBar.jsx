import React from 'react'
import SearchWithDropdown from '../atoms/SearchWithDropdown'
import { IoPersonOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import Link from 'next/link';

// import ToggleThemeButton from '../atoms/toggleThemeButton'

const NavBar = () => {
  return (
    <div className='sticky top-0 z-50'>
      <div className='bg-primary'>
        <div className='container mx-auto flex justify-between items-center h-[80px] select-none'>
          <p className='text-4xl font-bold text-primary-light text-white'> El-Logo </p>
          <SearchWithDropdown />
          <Link href="/login">
            <button className='flex justify-between items-center gap-4 text-white'>
              <IoPersonOutline size={35} />
              <div className='flex flex-col items-start font-semibold'>
                <p className='text-xa'>الحساب الشخصي</p>
                <p className='text-sm'>تسجيل دخول / حساب جديد</p>
              </div>
            </button>
          </Link>
          <div className='flex gap-4'>
            <button>
              <div className='relative'> 
                <FiHeart size={30} className='text-white' />
                <p className='text-sm absolute -top-2 -right-2 bg-white w-5 h-5 rounded-full text-primary'>0</p>
              </div>
            </button>
            <button>
              <div className='relative'> 
                <BsCart3 size={30} className='text-white' />
                <p className='text-sm absolute -top-2 -right-2 bg-white w-5 h-5 rounded-full text-primary'>0</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className='bg-white border-b h-10 flex items-center'>
        <div className='container mx-auto flex items-center'>
          <div className='flex justify-between items-center w-1/3'>
            <button className='transition-all hover:text-primary font-semibold duration-300'>الرئيسية</button>
            <button className='transition-all hover:text-primary font-semibold duration-300'>اخر الاخبار</button>
            <button className='transition-all hover:text-primary font-semibold duration-300'>العروض</button>
            <button className='transition-all hover:text-primary font-semibold duration-300'>التسجيل كمورد ؟</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar