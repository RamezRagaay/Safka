"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { InputWithLabel } from '@/components/atoms/InputWithLable';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { signup } from '@/services/user';
import { toast, Toaster } from 'react-hot-toast';
const RightPanel = () => {
  const router = useRouter();

  const [phone, setPhone] = useState("");

  const schema = yup.object().shape({
    username: yup.string().required("اسم المستخدم مطلوب"),
    name: yup.string().required("الاسم مطلوب"),
    email: yup.string().email("البريد الالكتروني غير صحيح").required("البريد الالكتروني مطلوب"),
    password: yup.string().required("كلمة المرور مطلوبة").min(8, "كلمة المرور غير صحيحة"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "كلمة المرور غير متطابقة"),
    address : yup.string().required("العنوان مطلوب"),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),});
    console.log(errors);
    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);


  const onSubmit = async (data) => {
    try {
      // console.log("Form Data: ",data);
      const dto = {"name": data.name,
        "username": data.username, "email": data.email,
        "password": data.password,
        "passwordConfirm": data.confirmPassword,
        "address": data.address,
        "role" : "customer",
        "is_admin": false
      };
      console.log("dto: ", dto);
      
      const user = await signup(dto);
      console.log(user);
      if (user) {
        toast.success('تم التسجيل بنجاح!');
        setTimeout(() => {
          router.push("/login");
        }, 1500);

      }
    }
    catch (error) {
      console.error(error);
      toast.error('حدث خطأ أثناء التسجيل.');
    }

  };
  return (
    <div className="flex flex-col justify-center items-center p-4 sm:p-10 bg-white shadow-md flex-[2]">
       <Toaster position="bottom-left" reverseOrder={false} />
      <div className='w-full sm:w-[400px] shadowbox px-4 sm:px-20 pb-10 pt-10'>

        <h2 className="text-2xl mb-6">انشاء حساب</h2>

        <form className="w-full max-w-xs" onSubmit={handleSubmit(onSubmit)}>
          <InputWithLabel lable={"اسم المستخدم"} placeholder={"Ex: Ahmed"} type={"text"} id="username" register={register} errors={errors}/>
          <InputWithLabel lable={"الاسم "} placeholder={"Ex: Ahmed"} type={"name"} id="name" register={register} errors={errors}/>
          {/* <InputWithLabel lable={"الاسم الاخير"} placeholder={"Ex: Ahmed"} type={"name"} id="lastName" register={register} errors={errors}/> */}
          <InputWithLabel lable={"البريد الالكتروني"} placeholder={"example@gmail.com"} id="email" type={"email"} register={register} errors={errors}/>
          <div dir='ltr' className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" dir='rtl'>رقم الهاتف</label>
            <PhoneInput
              country={'sa'}
              value={phone}
              onChange={setPhone}
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
          </div>
          <div className='relative'>
            <InputWithLabel lable={"كلمة المرور"} placeholder={"******"} type={showPass ? "text" : "password"} id="password" register={register} errors={errors}/>
            <div className='absolute  right-2 top-8 cursor-pointer scale-75' onClick={() => setShowPass(!showPass)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M3 13c3.6-8 14.4-8 18 0"/><path d="M12 17a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"/></g></svg></div>
          </div>
          <div className='relative'>
            <InputWithLabel lable={"تأكيد كلمة المرور"} placeholder={"******"} type={showConfirmPass ? "text" : "password"} id="confirmPassword" register={register} errors={errors}/>
            <div className='absolute  right-2 top-8 cursor-pointer scale-75' onClick={() =>  setShowConfirmPass(!showConfirmPass)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M3 13c3.6-8 14.4-8 18 0"/><path d="M12 17a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"/></g></svg></div>
          </div>
          <InputWithLabel lable={"العنوان"} placeholder={"ex: 55 street"} type={"text"} id="address" register={register} errors={errors}/>

          <Button variant="default" type="submit">انشاء حساب</Button>
        </form>
      </div>
    </div>
  );
};

export default RightPanel;