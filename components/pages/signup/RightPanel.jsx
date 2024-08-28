"use client"
import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button"
import { InputWithLabel } from '@/components/atoms/InputWithLable';
import { Ghost } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

const RightPanel = () => {
  const [phone, setPhone] = useState("");
  return (
    <div className="flex flex-col justify-center items-center p-10 bg-white shadow-md flex-[2]">
      <h2 className="text-2xl mb-6">انشاء حساب</h2>

      <form className="w-full max-w-xs">
        {/* ... other input fields ... */}
        <InputWithLabel lable={"الاسم الاول"} placeholder={"Ex: Ahmed"} type={"name"}/>
        <InputWithLabel lable={"الاسم الاخير"} placeholder={"Ex: Ahmed"} type={"name"}/>
        <InputWithLabel lable={"البريد الالكتروني"} placeholder={"example@gmail.com"} type={"email"}/>
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
        <InputWithLabel lable={"كلمة المرور"} placeholder={"**"} type={"password"}/>
        <InputWithLabel lable={"تأكيد كلمة المرور"} placeholder={"**"} type={"password"}/>

        <Button variant="default">انشاء حساب</Button>
        {/* ... rest of the form ... */}
      </form>
    </div>
  );
};

export default RightPanel;