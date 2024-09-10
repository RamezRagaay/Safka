'use client'
import React, { Suspense, useEffect, useState } from 'react'
import { Heart, ShoppingCart, User, Search, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import Cookies from 'js-cookie'
import { logout } from '@/services/user'
import SearchBar from './SearchBar'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [username, setUsername] = useState(null);

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
    
    <nav className="shadow-md bg-primary select-none" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="hidden lg:flex items-center justify-between h-16">
          {/* Logo */}

          <Link href="/">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-800">El-Logo</span>
            </div>
          </Link>


          <div className="flex-1">
            <div className="flex items-center justify-center space-x-4 space-x-reverse">
              <Link href="/">
                <button href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">الصفحة الرئيسية</button>
              </Link>
              <Link href="/products">
                <button href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">المنتجات</button>
              </Link>
              <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">أخر الاخبار</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">من نحن</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">اتصل بنا</a>
            </div>
          </div>

          {/* <Suspense> */}

            <SearchBar className={"flex-1 max-w-xs mx-4"} />
          {/* </Suspense> */}


          <div className="flex items-center space-x-4 space-x-reverse">
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-800 hover:bg-transparent">
              <Heart className="h-5 w-5" />
              <span className="sr-only">قائمة الرغبات</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-800 hover:bg-transparent">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">سلة التسوق</span>
            </Button>
            {
              username ?
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex gap-2 border-black border-2 rounded-full hover:bg-slate-200 duration-200">
                  <User className="h-5 w-5" />
                  <p className='font-medium'>{username}</p>
                  <span className="sr-only">قائمة المستخدم</span>
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                {/* <Link href="/login"> */}
                  <DropdownMenuItem>الحساب الشخصي</DropdownMenuItem>
                {/* </Link> */}
                <DropdownMenuItem onClick={handleLogout}> تسجيل خروج</DropdownMenuItem>
              </DropdownMenuContent>
              </DropdownMenu>
              :
              <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex gap-2 border-slate-600 border-2 rounded-full hover:bg-slate-100 duration-200">
                  <User className="h-5 w-5 text-slate-600" />
                  <p className='font-medium text-slate-600'>تسجيل دخول</p>
                  <span className="sr-only">قائمة المستخدم</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <Link href="/login">
                  <DropdownMenuItem>مستخدم</DropdownMenuItem>
                </Link>
                <Link href="/seller/login">
                  <DropdownMenuItem>تاجر</DropdownMenuItem>
                </Link>
                <Link href="/supplier/login">
                  <DropdownMenuItem>مورد </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
              </DropdownMenu>
            }
          </div>
        </div>



        <div className="lg:hidden">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-800">El-Logo</span>
            </div>
          </Link>



            <div className="flex items-center space-x-4 space-x-reverse">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
                <span className="sr-only">قائمة الرغبات</span>
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">سلة التسوق</span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                    <span className="sr-only">قائمة المستخدم</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <Link href="/login">
                    <DropdownMenuItem>مستخدم</DropdownMenuItem>
                  </Link>
                  <Link href="/seller/login">
                    <DropdownMenuItem>تاجر</DropdownMenuItem>
                  </Link>
                  <Link href="/supplier/login">
                    <DropdownMenuItem>مورد </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>



            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative z-50 transition-all duration-300 ease-in-out"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
                <span className="sr-only">
                  {mobileMenuOpen ? 'إغلاق القائمة الرئيسية' : 'فتح القائمة الرئيسية'}
                </span>
              </Button>
            </div>
          </div>



          <div className=" border-gray-200 py-3">
            {/* <Suspense> */}
              <SearchBar className="border-t border-gray-200 py-3"/>
            {/* </Suspense> */}
          </div>


        </div>


      </div>



      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out shadow-lg ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '60px' }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/">
            <button  className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >الرئيسية</button>
          </Link>
          <Link href="/products">
            <button className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >المنتجات</button>
          </Link>
          <a href="#" className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >أخر الاخبار</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >من نحن</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >اتصل بنا</a>
        </div>
      </div>
    </nav>
  )
}