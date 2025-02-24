"use client"
import React, { useState } from 'react';
import { InputWithLabel } from '@/components/atoms/InputWithLable';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const FormOne = ({ formData, onSubmit }) => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const schema = yup.object().shape({
    username: yup.string().required("الاسم مطلوب"),
    email: yup.string().email("البريد الالكتروني غير صحيح").required("البريد الالكتروني مطلوب"),
    password: yup.string().required("كلمة المرور مطلوبة").min(8, "الحد الادنى لكلمة المرور هو ٨ رموز"),
    passwordConfirm: yup.string().oneOf([yup.ref("password"), null], "كلمة المرور غير متطابقة"),
    phone: yup.string(),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: formData,
  });

  return (
    <form id="form-1" onSubmit={handleSubmit(onSubmit)} className='w-full p-4 sm:p-10'>
      <h2 className="text-2xl mb-6 font-bold text-slate-800 text-center">بيانات المورد</h2>
      <InputWithLabel lable={"الاسم الاول"} placeholder={"Ex: Ahmed"} type={"name"} id="username" register={register} errors={errors}/>
      <InputWithLabel lable={"البريد الالكتروني"} placeholder={"example@gmail.com"} id="email" type={"email"} register={register} errors={errors}/>
      <div dir='ltr' className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1" dir='rtl'>رقم الهاتف</label>
        <Controller
          name="phone"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              country={'sa'}
              value={value}
              onChange={onChange}
              inputStyle={{
                width: '100%',
                height: '40px',
                fontSize: '16px',
                paddingLeft: '48px',
                borderRadius: '0.375rem',
                border: '1px solid #e2e8f0',
              }}
              containerStyle={{
                width: '100%',
              }}
              buttonStyle={{
                border: '1px solid #e2e8f0',
                borderRight: 'none',
                backgroundColor: 'white',
                borderRadius: '0.375rem 0 0 0.375rem',
              }}
              dropdownStyle={{
                width: '300px',
              }}
            />
          )}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
      </div>
      <div className='relative mb-6'>
        <InputWithLabel lable={"كلمة المرور"} placeholder={"******"} type={showPass ? "text" : "password"} id="password" register={register} errors={errors}/>
        <div className='absolute right-2 top-8 cursor-pointer scale-75' onClick={() => setShowPass(!showPass)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M3 13c3.6-8 14.4-8 18 0"/><path d="M12 17a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"/></g></svg>
        </div>
      </div>
      <div className='relative mb-6'>
        <InputWithLabel lable={"تأكيد كلمة المرور"} placeholder={"******"} type={showConfirmPass ? "text" : "password"} id="passwordConfirm" register={register} errors={errors}/>
        <div className='absolute right-2 top-8 cursor-pointer scale-75' onClick={() => setShowConfirmPass(!showConfirmPass)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M3 13c3.6-8 14.4-8 18 0"/><path d="M12 17a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"/></g></svg>
        </div>
      </div>
    </form>
  );
};

export default FormOne;