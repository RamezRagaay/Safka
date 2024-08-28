import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button"
import { InputWithLabel } from '@/components/atoms/InputWithLable';
import { Ghost } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  email: yup.string().email("البريد الالكتروني غير صحيح").required("البريد الالكتروني مطلوب"),
  password: yup.string().required("كلمة المرور مطلوبة"),
  remember: yup.boolean(),
})
const RightPanel = () => {

  // const { handleSubmit, control, register } = useForm({
  //   resolver: yupResolver(schema),
  // });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center items-center p-10 bg-white shadow-md flex-[2]">
      <h2 className="text-2xl mb-6">تسجيل الدخول</h2>
      <div className="flex gap-4 mb-6">
        <button className="bg-secondary px-6 py-3 rounded-2xl flex items-center font-medium text-sm">
            تسجيل دخول باستخدام جوجل

            <FcGoogle fontSize={16}/>
        </button>
      </div>
      <form className="w-full max-w-xs">
        <InputWithLabel lable={"البريد الالكتروني"} placeholder={"example@gmail.com"} type={"email"}/>
        <InputWithLabel lable={"كلمة المرور"} placeholder={"*******"} type={"password"}/>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" className="mx-1"/>
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
  );
};

export default RightPanel;
