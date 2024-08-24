import React from 'react'

// TODO : Add form validation , Use React Hook Form and Finish styling (Fonts , Theme and buttons transitions) .

const SignUpForm = () => {
  return (
    <section className=' dark:bg-primary-dark flex justify-center items-center '>
      <form action="" className='container bg-[#9FB4FF] p-20 rounded-[20px] flex flex-col gap-20 mx-48 my-24 '>
        <div className='grid grid-cols-2 gap-x-28 gap-y-8'>
          <div className='flex flex-col gap-5 items-end justify-center'>
            <p className='text-[32px] font-bold '>البريد الألكتروني</p>
            <input type="text" placeholder='...أدخل البريد الألكتروني ' className='rounded-[7px] w-[450px] h-[44px] 
            text-right text-gray-700 px-5'/>
          </div>
          <div className='flex flex-col gap-5 items-end justify-center'>
            <p className='text-[32px] font-bold '>الأسم بالكامل</p>
            <input type="text" placeholder='...أدخل الأسم الرباعي' className='rounded-[7px] w-[450px] h-[44px] 
            text-right text-gray-700 px-5'/>
          </div>
          <div className='flex flex-col gap-5 items-end justify-center'>
            <p className='text-[32px] font-bold '>رقم الواتس اب</p>
            <input type="text" placeholder='...أدخل رقم الواتس اب إذا كان منفصلا' className='rounded-[7px] w-[450px] h-[44px] 
            text-right text-gray-700 px-5'/>
          </div>
          <div className='flex flex-col gap-5 items-end justify-center'>
            <p className='text-[32px] font-bold '>رقم الهاتف</p>
            <input type="text" placeholder='...أدخل رقم الهاتف مصحوبا بكود الدولة' className='rounded-[7px] w-[450px] h-[44px] 
            text-right text-gray-700 px-5'/>
          </div>
          <div className='flex flex-col gap-5 items-end justify-center'>
            <p className='text-[32px] font-bold '>تاريخ الميلاد</p>
            <input type="text" placeholder='...أدخل تاريخ الميلاد' className='rounded-[7px] w-[450px] h-[44px] 
            text-right text-gray-700 px-5'/>
          </div>
          <div className='flex flex-col gap-5 items-end justify-center'>
            <p className='text-[32px] font-bold '>العنوان</p>
            <input type="text" placeholder='....أدخل العنوان بالتفصيل' className='rounded-[7px] w-[450px] h-[44px] 
            text-right text-gray-700 px-5'/>
          </div>
          <div className='flex flex-col gap-5 items-end justify-center'>
            <p className='text-[32px] font-bold '>تأكيد كلمة المرور</p>
            <input type="text" placeholder='...أكد كلمة المرور' className='rounded-[7px] w-[450px] h-[44px] 
            text-right text-gray-700 px-5'/>
          </div>
          <div className='flex flex-col gap-5 items-end justify-center'>
            <p className='text-[32px] font-bold '>كلمة المرور</p>
            <input type="text" placeholder='...أنشئ كلمة مرور' className='rounded-[7px] w-[450px] h-[44px] 
            text-right text-gray-700 px-5'/>
          </div>
        </div>
        <button type = "submit" className = 'w-[241px] h-[49px] font-bold text-2xl rounded-[10px] bg-black text-white self-center'>تسجيل الدخول</button>
      </form>
    </section>
  )
}

export default SignUpForm
