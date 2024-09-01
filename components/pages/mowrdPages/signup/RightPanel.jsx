'use client'
import React, { useState } from 'react'
import MultiStepForm from './MultiStepForm'


const RightPanel = () => {
	const [formNumber, setFormNumber] = useState(1)
	const [formData, setFormData] = useState({})
  return (
    <div className="w-full flex flex-col justify-around items-center bg-white shadow-md flex-[2] select-none h-[1000px]">
      <MultiStepForm />
    </div>
  )
}

export default RightPanel