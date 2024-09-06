"use client"
import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button"
import { InputWithLabel } from '@/components/atoms/InputWithLable';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { login } from '@/services/seller';
import Cookies from 'js-cookie';
import { toast, Toaster } from 'react-hot-toast';

const RightPanel = () => {
  const router = useRouter();
  const schema = yup.object().shape({
    email: yup.string().email("البريد الالكتروني غير صحيح").required("البريد الالكتروني مطلوب"),
    password: yup.string().required("كلمة المرور مطلوبة").min(8, "كلمة المرور غير صحيحة"),
    remember: yup.boolean(),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),});

  const [showPass, setShowPass] = useState(false);


  return (
    <div className=" flex flex-col justify-center items-center p-10 bg-white shadow-md flex-[2]">
      <Toaster position="bottom-left" reverseOrder={false} />
      <div className='w-[400px]  shadowbox px-20 pb-10 pt-10'>
        <h2 className="text-2xl mb-6 font-bold text-slate-800">تسجيل الدخول كتاجر </h2>
        <div className="flex gap-4 mb-6">
          <button className="bg-secondary px-6 py-3 rounded-2xl flex gap-3 items-center font-medium text-xs text-slate-700">
              تسجيل دخول باستخدام جوجل
              <FcGoogle fontSize={22}/>
          </button>
        </div>
        <form className="w-full max-w-xs" onSubmit={
          handleSubmit( async (data) => {
          const dto = {
            email: data.email,
            password: data.password,
          }
          try {
            const response = await login(dto);
            if (response.authData.token) {
              console.log(response);
              Cookies.set("seller-token", response.authData.token, { expires: 7, secure: true });
              Cookies.set("seller-id", response.authData.record.id, { expires: 7, secure: true });
              Cookies.set("seller-username", response.authData.record.username, { expires: 7, secure: true });
              console.log("token saved");
              toast.success('تم التسجيل بنجاح!');
              setTimeout(() => {
                router.push("/seller/products");
              }, 1500);    
              // router.push("/");
              // console.log("redirecting to home");
              }
            else {
              toast.error('هناك خطأ في البيانات');
              }
            } 
          catch (error) {
            console.log(error);
            }
          })
        }>
          <InputWithLabel lable={"البريد الالكتروني"} placeholder={"example@gmail.com"} id="email" type={"email"} register={register} errors={errors}/>
          <div className='relative'>
            <InputWithLabel lable={"كلمة المرور"} placeholder={"*******"} id="password" type={showPass? "text" : "password"} register={register} errors={errors}/>
            <div className='absolute  right-2 top-8 cursor-pointer scale-75' onClick={() => setShowPass(!showPass)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M3 13c3.6-8 14.4-8 18 0"/><path d="M12 17a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"/></g></svg></div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id='remember' {...register("remember")} className='w-4 h-4  ml-1  accent-primary'/>
            <label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
            >
              تذكرني
            </label>
            </div>
            <Button variant="link" className="text-sm cursor-pointer">هل نسيت كلمة المرور ؟</Button>
          </div>
          <Button variant="default" type="submit">تسجيل الدخول</Button>
        </form>
      </div>
    </div>
  );
};

export default RightPanel;
