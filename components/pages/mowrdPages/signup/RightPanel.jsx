'use client'
import React, { useEffect, useState } from 'react'
import MultiStepForm from './MultiStepForm'
import Cookies from 'js-cookie'


const RightPanel = () => {
  useEffect(() => {
    Cookies.remove("customer-token");
    Cookies.remove("customer-id");
    Cookies.remove("customer-username");
    Cookies.remove("provider-token");
    Cookies.remove("provider-id");
    Cookies.remove("provider-username");
    Cookies.remove("seller-token");
    Cookies.remove("seller-id");
    Cookies.remove("seller-username");
    Cookies.remove("role");
  })
	const [formNumber, setFormNumber] = useState(1)
	const [formData, setFormData] = useState({})
  return (
    <div className="w-full flex flex-col justify-around items-center bg-white shadow-md flex-[2] select-none h-auto sm:h-[1000px] p-4 sm:p-10">
      <MultiStepForm />
    </div>
  )
}

export default RightPanel