import React from 'react'
import  Image  from 'next/image';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <div className='flex'>
        <header className='flex-[1]'>
            
            <section className=' bg-primary flex-[1] flex flex-col m-5 md:m-10 p-5 md:p-10 justify-between items-center rounded-2xl hover:shadow-xl shadow-md duration-300 header-section1'>
                <img src={'/furniture1.webp'} alt="logo" className='px-5 max-md:mt-20 object-cover w-full' />
                <div className='flex flex-row items-center text-center md:text-left md:items-start gap-5'>
                    <h1 className='text-xl md:text-2xl lg:text-4xl font-bold text-white mt-5 md:mt-10 text-right'>
                        الأثات المنزلي
                    </h1>
                    <Button variant="secondary" className="rounded-full mt-5 md:mt-10 px-5 scale-100 md:scale-125">
                        تسوق الان
                    </Button>
                </div>
            </section>
            <section className=' bg-primary flex-[1] flex flex-col m-5 md:m-10 p-5 md:p-10 justify-between items-center rounded-2xl hover:shadow-xl shadow-md duration-300 header-section1'>
                <img src={'/furniture1.webp'} alt="logo" className='px-5 max-md:mt-20 object-cover w-full' />
                <div className='flex flex-row items-center text-center md:text-left md:items-start gap-5'>
                    <h1 className='text-xl md:text-2xl lg:text-4xl font-bold text-white mt-5 md:mt-10 text-right'>
                        الأثات المنزلي
                    </h1>
                    <Button variant="secondary" className="rounded-full mt-5 md:mt-10 px-5 scale-100 md:scale-125">
                        تسوق الان
                    </Button>
                </div>
            </section>
        </header>

        <section className='flex-[2] bg-slate-100 flex flex-col md:flex-row m-5 md:m-10 p-5 md:p-10 justify-between items-center rounded-2xl hover:shadow-xl shadow-md duration-300 header-section2  overflow-hidden'>
            <img src={'/lounger.png'} alt="logo" className='p-5 md:p-10 w-full md:w-1/2 object-cover scale-[120%]' />
            <div className='flex flex-col items-center text-center md:text-left md:items-start'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold  mt-5 md:mt-10 text-primary text-right'>
                    الأثات المنزلي
                </h1>
                <Button variant="outline" className="rounded-full mt-5 md:mt-10 px-5 scale-100 md:scale-125 text-primary hover:text-primary-dark">
                    تسوق الان
                </Button>
            </div>
        </section>
    </div>
)
}

export default Header