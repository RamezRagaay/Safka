'use client'
import React, { useState } from 'react'
import FormOne from './FormOne'
import FormTwo from './FormTwo'
import FormThree from './FormThree'
import FormFour from './FormFour'
import FormFive from './FormFive'
import ProgressBar from './progressBar'


const RightPanel = () => {
	const [formNumber, setFormNumber] = useState(5)
  return (
    <div className=" flex flex-col justify-around items-center p-10 bg-white shadow-md flex-[2] select-none">
			<h1 className="text-3xl font-bold mb-4"> تسجيل حساب مورد جديد</h1>
			<ProgressBar formNumber={formNumber}/>
      {formNumber === 1 && <FormOne setFormNumber={setFormNumber}/>}
			{formNumber === 2 && <FormTwo setFormNumber={setFormNumber}/>}
			{formNumber === 3 && <FormThree setFormNumber={setFormNumber}/>}
			{formNumber === 4 && <FormFour setFormNumber={setFormNumber}/>}
			{formNumber === 5 && <FormFive setFormNumber={setFormNumber}/>}
    </div>
  )
}

export default RightPanel