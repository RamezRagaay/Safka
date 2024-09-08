"use client"
import React, { useEffect, useState } from 'react';
import SearchWithDropdown from '../atoms/SearchWithDropdown';
import { IoLogOutOutline, IoPersonOutline, IoMenu } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import Link from 'next/link';
import Cookies from 'js-cookie';
import { logout } from '@/services/user';
import { IoIosArrowBack } from 'react-icons/io';
import SearchWithDropDown from './../atoms/SearchWithDropdown';

const NavBar = () => {
  const [username, setUsername] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const cookieUsername = Cookies.get("customer-username");
    setUsername(cookieUsername);
  }, []);

  const handleLogout = async () => {
    
    await logout();
    Cookies.remove("customer-token");
    Cookies.remove('customer-id');
    Cookies.remove('customer-username');
    window.location.reload();
  };

  return (
    <div className='sticky top-0 z-50'>
      <div className='bg-primary flex-col justify-center items-center'>
        <div className='mx-auto flex justify-between items-center h-[80px] select-none px-4 '>
          <p className='text-4xl font-bold text-primary-light text-white'> El-Logo </p>
          <div className='max-md:hidden'>
            <SearchWithDropdown />
          </div>
          <div className=' flex justify-between items-center gap-4 text-white'>
            <IoPersonOutline className="md:w-[30px] md:h-[30px] w-[25px] h-[25px]" />
            <div className='flex flex-col items-start font-semibold'>
              {
                username ? (
                  <p className='md:font-semibold text-lg'>{username}</p>
                ) : (
                  <>
                    <p className='hidden md:block md:text-xl '>الحساب الشخصي</p>
                    <Link href="/login" className="flex items-center">
                      <p className='max-md:text-xs md:text-sm'>تسجيل دخول</p>
                      <IoIosArrowBack size={10} />
                    </Link>
                  </>
                )
              }
            </div>
          </div>
          <div className='flex gap-4 '>
            <button>
              <div className='relative'> 
                <FiHeart className='text-white md:w-[30px] md:h-[30px] w-[22px] h-[22px]' />
                <p className='text-sm absolute -top-2 -right-2 bg-white w-3 h-3 rounded-full text-primary flex items-center justify-center  max-md:text-[10px] md:w-5 md:h-5'>0</p>
              </div>
            </button>
            <button>
              <div className='relative'> 
                <BsCart3 className='text-white md:w-[30px] md:h-[30px] w-[22px] h-[22px]' />
                <p className='text-sm absolute -top-2 -right-2 bg-white w-3 h-3 rounded-full text-primary flex items-center justify-center  max-md:text-[10px] md:w-5 md:h-5'>0</p>
              </div>
            </button>
            {
            username &&
            <button onClick={handleLogout}>
              <IoLogOutOutline className="text-white md:w-[30px] md:h-[30px] w-[22px] h-[22px]"/>
            </button>
            }
          </div>
          <button className='md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <IoMenu size={35} className="text-white" />
          </button>
        </div>
        <div className="md:hidden w-full flex justify-center p-2">
          <SearchWithDropDown />
        </div>
      </div>
      <div className='bg-white border-b h-10 flex items-center'>
        <div className='container mx-auto flex items-center px-4'>
          <div className='hidden md:flex justify-between items-center gap-6 p-2'>
            <button className='transition-all hover:text-primary font-semibold duration-300'>الرئيسية</button>
            <button className='transition-all hover:text-primary font-semibold duration-300'>اخر الاخبار</button>
            <button className='transition-all hover:text-primary font-semibold duration-300'>العروض</button>
            <button className='transition-all hover:text-primary font-semibold duration-300'>
              <Link href="/supplier/login">
                التسجيل كمورد ؟
              </Link>
            </button>
            <button className='transition-all hover:text-primary font-semibold duration-300'>
              <Link href="/seller/login">
                التسجيل كتاجر ؟
              </Link>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className='md:hidden fixed inset-0 bg-black bg-opacity-50 z-40'>
          <div className='fixed inset-y-0 left-0 w-64 bg-white p-4 z-50'>
            <button className='mb-4' onClick={() => setIsMenuOpen(false)}>
              <IoLogOutOutline size={30} className="text-black"/>
            </button>
            <div className='flex flex-col gap-4'>
              <button className='transition-all hover:text-primary font-semibold duration-300'>الرئيسية</button>
              <button className='transition-all hover:text-primary font-semibold duration-300'>اخر الاخبار</button>
              <button className='transition-all hover:text-primary font-semibold duration-300'>العروض</button>
              <button className='transition-all hover:text-primary font-semibold duration-300'>
                <Link href="/supplier/login">
                  التسجيل كمورد ؟
                </Link>
              </button>
              <button className='transition-all hover:text-primary font-semibold duration-300'>
                <Link href="/seller/login">
                  التسجيل كتاجر ؟
                </Link>
              </button>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
