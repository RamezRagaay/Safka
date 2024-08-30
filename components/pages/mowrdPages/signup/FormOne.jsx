import { InputWithLabel } from '@/components/atoms/InputWithLable'
import React from 'react'

const FormOne = ({setFormNumber}) => {
  return (
    <div className='w-[600px]  shadowbox px-20 pb-10 pt-10'>
      <h2 className="text-2xl mb-6 font-bold text-slate-800 text-center">بيانات المورد</h2>
      <form action="">
      {/* <InputWithLabel lable={"الاسم الاول"} placeholder={"Ex: Ahmed"} type={"name"} id="firstName" register={register}/> */}
          {/* <InputWithLabel lable={"الاسم الاخير"} placeholder={"Ex: Ahmed"} type={"name"} id="lastName" register={register} />
          <InputWithLabel lable={"اسم الشركة"} placeholder={"Ex: Ahmed"} type={"name"} id="lastName" register={register} />
          <InputWithLabel lable={"البريد الالكتروني"} placeholder={"example@gmail.com"} id="email" type={"email"} register={register}/> */}
      </form>
    </div>
  )
}

export default FormOne
