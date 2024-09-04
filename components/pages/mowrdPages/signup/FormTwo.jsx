"use client"
import React from 'react';
import { Button } from "@/components/ui/button"
import { InputWithLabel } from '@/components/atoms/InputWithLable';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';

const FormTwo = ({formData, onSubmit}) => {
  const router = useRouter();

  const MAX_FILE_SIZE = 102400; // 100kb
  const validFileExtensions = ["jpg", "jpeg", "png", "pdf", "svg", "webp"];

  function isValidFileType(fileExt) {
    return validFileExtensions.includes(fileExt);
  }

  const schema = yup.object().shape({
    photo: yup.mixed()
    .required("شعار الشركة مطلوب")
    .test("is-valid-file", "شعار الشركة غير صالح", (value) => {
        const ext = value[0].name.split(".").pop().toLowerCase();
        console.log('File value:', value[0].name.split(".").pop().toLowerCase()); // Log the entire value object
        return value && isValidFileType(ext);
      })
    .test("is-valid-size", "شعار الشركة يجب الا يزيد عن 100 كيلو بايت", (value) => {
      return value && value[0].size <= MAX_FILE_SIZE;
    })
    ,
    orgnization_name: yup.string().required("اسم الشركة مطلوب"),
    Orgnization_phone: yup.string().required(" رقم الشركة مطلوب"),
    orgnization_email: yup.string().email("البريد الالكتروني غير صحيح").required("البريد الالكتروني مطلوب"),
    resposible_name: yup.string().required("اسم المسؤول مطلوب"),
    responsible_phone: yup.string().required(" رقم المسؤول مطلوب"),
    address: yup.string().required(),
    // companyDescription: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: formData,
  });

  return (
    <form id="form-2" className='w-full ' onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-2xl mb-6 font-bold text-slate-800 text-center">بيانات الشركة</h2>
      <Input type={"file"} id="photo" {...register("photo")} />
      {errors.companyLogo && <p className="text-red-500 text-sm">{errors.companyLogo.message}</p>}
      <InputWithLabel lable={"اسم الشركة"} placeholder={""} type={"text"} id="orgnization_name" register={register} errors={errors}/>
      <InputWithLabel lable={"رقم الشركة"} placeholder={""} type={"text"} id="Orgnization_phone" register={register} errors={errors}/>
      <InputWithLabel lable={"بريد الشركة الالكتروني"} placeholder={"example@gmail.com"} id="orgnization_email" type={"email"} register={register} errors={errors}/>
      <InputWithLabel lable={"اسم المسؤول"} placeholder={"Ex: Ahmed"} type={"text"} id="resposible_name" register={register} errors={errors}/>
      <InputWithLabel lable={"رقم المسؤول"} placeholder={"Ex: Ahmed"} type={"text"} id="responsible_phone" register={register} errors={errors}/>
      <InputWithLabel lable={"عنوان الشركة"} placeholder={"Ex: Ahmed"} type={"text"} id="address" register={register} errors={errors}/>
      {/* <InputWithLabel lable={"وصف الشركة"} placeholder={"Ex: Ahmed"} type={"text"} id="companyDescription" register={register} errors={errors}/> */}
    </form>
  );
}

export default FormTwo;
