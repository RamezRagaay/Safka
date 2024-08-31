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

const FormTwo = ({formData, onSubmit}) => {
  const router = useRouter();

  const MAX_FILE_SIZE = 102400; // 100kb
  const validFileExtensions = ["jpg", "jpeg", "png", "pdf", "svg", "webp"];

  function isValidFileType(fileName, fileType) {
    return fileName && validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1;
  }
  const schema = yup.object().shape({
    // companyLogo: yup.mixed().required("شعار الشركة مطلوب").test("is-valid-file", "شعار الشركة غير صالح", (value) => {
    //   isValidFileType(value && value.name.toLowerCase(), "image");
    // }).test("is-valid-size", "شعار الشركة يجب الا يزيد عن 100 كيلو بايت", (value) => {
    //   value && value.size <= MAX_FILE_SIZE;
    // }),
    companyName: yup.string().required("اسم الشركة مطلوب"),
    companyPhone: yup.string().required(" رقم الشركة مطلوب"),
    companyEmail: yup.string().email("البريد الالكتروني غير صحيح").required("البريد الالكتروني مطلوب"),
    companyAddress: yup.string().required("كلمة المرور مطلوبة").min(8, "الحد الادنى لكلمة المرور هو ٨ رموز"),
    companyDescription: yup.string().required("كلمة المرور مطلوبة").min(8, "الحد الادنى لكلمة المرور هو ٨ رموز"),
    })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: formData,
  });
  return (
      <form id="form-2" className='w-full '
      onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl mb-6 font-bold text-slate-800 text-center">بيانات الشركة</h2>
        <InputWithLabel lable={"اسم الشركة"} placeholder={""} type={"text"} id="companyName" register={register} errors={errors}/>
        <InputWithLabel lable={"رقم الشركة"} placeholder={""} type={"text"} id="companyPhone" register={register} errors={errors}/>
        <InputWithLabel lable={"بريدالشركة الالكتروني"} placeholder={"example@gmail.com"} id="companyEmail" type={"email"} register={register} errors={errors}/>
        {/* <div dir='ltr' className="mb-4">
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
        </div> */}
        <InputWithLabel lable={"عنوان الشركة"} placeholder={"Ex: Ahmed"} type={"text"} id="companyAddress" register={register} errors={errors}/>
        <InputWithLabel lable={"وصف الشركة"} placeholder={"Ex: Ahmed"} type={"text"} id="companyDescription" register={register} errors={errors}/>
      </form>
  )
}

export default FormTwo
