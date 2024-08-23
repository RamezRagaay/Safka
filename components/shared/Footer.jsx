import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-secondary flex flex-col items-center py-5'>
        <div className='flex justify-between container pt-14'>
            <div className='flex flex-col gap-5 items-end'>
                <p className='text-[32px] font-bold'>للمزيد من التفاصيل</p>
                <form action="" className='flex flex-col gap-5 items-end'>
                    <input className='rounded-[7px] w-[411px] h-[44px] text-right dark:bg-transparent text-gray-700 dark:border-[#6F8FFE] dark:border-[1px]'  type="text" placeholder='...أدخل البريد الألكتروني ' />
                    <button className='rounded-[5px] border-primary dark:border-primary-dark border-[1px] w-[123px] h-[44px] text-primary dark:text-primary-dark font-bold'>إرسال</button>
                </form>
            </div>
            <div>
                <p className='text-[96px] font-bold'>صفقة</p>
            </div>
        </div>
        <p className='font-bold '>© 2022. All rights reserved.</p>
    </footer>
  )
}

export default Footer