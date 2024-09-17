// // ! THIS IS ALPHA VERSION OF NAVBAR FOR PRODUCTLIST B2B ! //

// "use client"
// import React, { useEffect, useState } from 'react';
// import SearchWithDropdown from '@/components/atoms/SearchWithDropdown';
// import { IoLogOutOutline, IoPersonOutline } from "react-icons/io5";
// import { FiHeart } from "react-icons/fi";
// import { BsCart3 } from "react-icons/bs";
// import Link from 'next/link';
// import Cookies from 'js-cookie';
// import { logout } from '@/services/user';
// import { useRouter } from 'next/navigation';

// const NavbarB2B = () => {
//   const [username, setUsername] = useState(null);
//   const router = useRouter();
//   useEffect(() => {
//     const cookieSeller = Cookies.get("seller-username");
//     setUsername(cookieSeller);
//   }, []);

//   const handleLogout = async () => {
//     await logout();
//     Cookies.remove("seller-token");
//     Cookies.remove('seller-id');
//     Cookies.remove('seller-username');
//     router.push("/"); // ? Redirect to home page for customer.
//   };

//   return (
//     <div className='sticky top-0 z-50'>
//       <div className='bg-primary'>
//         <div className='container mx-auto flex justify-between items-center h-[80px] select-none'>
//           <p className='text-4xl font-bold text-primary-light text-white'> El-Logo </p>
//           <SearchWithDropdown />
//           <div className='flex justify-between items-center gap-4 text-white'>
//             <IoPersonOutline size={35} />
//             <div className='flex flex-col items-start font-semibold'>
//               {
//                 username ? (
//                   <p className='font-semibold text-lg'>{username}</p>
//                 ) : (
//                   <>
//                     <p className='text-xl'>الحساب الشخصي</p>
//                     <Link href="/login">
//                       <p className='text-sm'>تسجيل دخول / حساب جديد</p>
//                     </Link>
//                   </>
//                 )
//               }
//             </div>
//           </div>
//           <div className='flex gap-4'>
//             <button>
//               <div className='relative'> 
//                 <FiHeart size={30} className='text-white' />
//                 <p className='text-sm absolute -top-2 -right-2 bg-white w-5 h-5 rounded-full text-primary'>0</p>
//               </div>
//             </button>
//             <button>
//               <div className='relative'> 
//                 <BsCart3 size={30} className='text-white' />
//                 <p className='text-sm absolute -top-2 -right-2 bg-white w-5 h-5 rounded-full text-primary'>0</p>
//               </div>
//             </button>
//             <button onClick={handleLogout}>
//               <IoLogOutOutline size={30} className="text-white"/>
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className='bg-white border-b h-10 flex items-center'>
//         <div className='container mx-auto flex items-center'>
//           <div className='flex justify-between items-center gap-6 p-2'>
//             <Link href="/seller/dashboard">
//               <button className='transition-all hover:text-primary font-semibold duration-300'>الرئيسية</button>
//             </Link>
//             <button className='transition-all hover:text-primary font-semibold duration-300'>اخر الاخبار</button>
//             <Link href="/seller/products">
//               <button className='transition-all hover:text-primary font-semibold duration-300'>المنتجات</button>
//             </Link>
//             {/* <button className='transition-all hover:text-primary font-semibold duration-300'>العروض</button> */}
//             {/* <button className='transition-all hover:text-primary font-semibold duration-300'>
//               <Link href="/supplier/login">
//                 التسجيل كمورد ؟
//               </Link>
//             </button>
//             <button className='transition-all hover:text-primary font-semibold duration-300'>
//               <Link href="/seller/login">
//                 التسجيل كتاجر ؟
//               </Link>
//             </button> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavbarB2B;


// ! THIS IS ALPHA VERSION OF NAVBAR FOR PRODUCTLIST B2B ! //

'use client'
import React, { Suspense, useEffect, useState } from 'react'
import { Heart, ShoppingCart, User, Menu, X } from 'lucide-react'
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
import SearchBar from '../../../shared/SearchBar'
import SearchBarB2B from './SearchBarB2B'

export default function NavbarB2B() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const cookieUsername = Cookies.get("seller-username");
    setUsername(cookieUsername);
  }, []);
  
  const handleLogout = async () => {
    await logout();
    Cookies.remove("seller-token");
    Cookies.remove('seller-id');
    Cookies.remove('seller-username');
    router.push("/");
  };

  return (
    
    <nav className="shadow-md bg-primary select-none sticky top-0 z-50" dir="rtl">
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
              <Link href="/seller/dashboard">
                <button href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">الصفحة الرئيسية</button>
              </Link>
              <Link href="/seller/products">
                <button href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">المنتجات</button>
              </Link>
              <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">أخر الاخبار</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">من نحن</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">اتصل بنا</a>
            </div>
          </div>

          <Suspense>

            <SearchBarB2B className={"flex-1 max-w-xs mx-4"} />
          </Suspense>


          <div className="flex items-center space-x-4 space-x-reverse">
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-800 hover:bg-transparent">
              <Heart className="h-5 w-5" />
              <span className="sr-only">قائمة الرغبات</span>
            </Button>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-800 hover:bg-transparent">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">سلة التسوق</span>
              </Button>
            </Link>
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
            <Suspense>
              <SearchBarB2B className="border-t border-gray-200 py-3"/>
            </Suspense>
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
          <Link href="/seller/dashboard">
            <button  className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >الرئيسية</button>
          </Link>
          <Link href="/seller/products">
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