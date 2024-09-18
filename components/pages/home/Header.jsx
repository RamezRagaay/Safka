import React from 'react'
import  Image  from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Header = () => {
    return (
    <div className='flex max-lg:flex-col min-h-screen m-10 gap-5 select-none'>
        <header className='flex flex-col gap-5 '>
					<section className=' bg-primary flex flex-col  justify-between items-center rounded-2xl hover:shadow-xl shadow-md duration-300 header-section1'>
                <img src={'/furniture1.webp'} alt="logo" className='px-5 object-cover w-full' />
                <div className='flex flex-row justify-between w-full p-5 items-center text-center md:text-left md:items-start gap-5'>
                    <h1 className='text-xl md:text-2xl font-bold text-white  text-right'>
                        الأثات المنزلي
                    </h1>
                    <Link href={'/products'}>
                        <Button variant="secondary" className="rounded-3xl scale-100">
                            تسوق الان
                        </Button>
                    </Link>
                </div>
            </section>
            <section className=' bg-primary/70 flex flex-col  justify-between items-center rounded-2xl hover:shadow-xl shadow-md duration-300 header-section1'>
                <img src={'/furniture2.png'} alt="logo" className='px-5 object-cover w-[60%]' />
                <div className='flex flex-row justify-between w-full p-5 items-center text-center md:text-left md:items-start gap-5'>
                    <h1 className='text-xl md:text-2xl font-bold text-white  text-right'>
                        الأثات المنزلي
                    </h1>
                    <Link href={'/products'}>
                      <Button variant="secondary" className="rounded-3xl scale-100">
                          تسوق الان
                      </Button>
                    </Link>
                </div>
            </section>
        </header>
        <section className='flex-[2] bg-slate-100 flex flex-col md:flex-row justify-around items-center rounded-2xl hover:shadow-xl shadow-md duration-300 header-section2  overflow-hidden h-screen'>
            <img src={'/lounger.png'} alt="logo" className='p-5 md:p-10 w-full md:w-1/2 object-cover scale-[100%]' />
            <div className='flex flex-col items-center text-center md:text-left md:items-start'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold  mt-5 md:mt-10 text-primary text-right'>
                    الأثات المنزلي
                </h1>
                <Link href={'/products'}>
                  <Button variant="outline" className="rounded-full m-5 scale-100 md:scale-125 text-primary hover:text-primary-dark">
                      تسوق الان
                  </Button>
                </Link>
            </div>
        </section>
    </div>
)
}

export default Header