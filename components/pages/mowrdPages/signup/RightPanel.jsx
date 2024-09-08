'use client'
import React, { useState } from 'react'
import MultiStepForm from './MultiStepForm'


const RightPanel = () => {
	const [formNumber, setFormNumber] = useState(1)
	const [formData, setFormData] = useState({})
  return (
    <div className="w-full flex flex-col justify-around items-center bg-white shadow-md flex-[2] select-none h-auto sm:h-[1000px] p-4 sm:p-10">
      <MultiStepForm />
    </div>
  )
}

export default RightPanel