"use client"
import React, { useCallback, useState } from 'react';
import FormOne from './FormOne';
import FormTwo from './FormTwo';
import FormThree from './FormThree';
import FormFour from './FormFour';
import FormFive from './FormFive';
import ProgressBar from './progressBar';
import { Button } from "@/components/ui/button";

const MultiStepForm = () => {
  const [formNumber, setFormNumber] = useState(1);
  const [formData, setFormData] = useState({});

  const updateFormData = useCallback((newData) => {
    setFormData((prevData) => {
      const updatedData = { ...prevData, ...newData };
      console.log(`Updated data for form ${formNumber}:`, updatedData);
      return updatedData;
    });
  }, [formNumber]);

  const nextStep =  useCallback(async (data) => {
    updateFormData(data);
    if (formNumber < 5) {
      setFormNumber((prev) => prev + 1);
    } else {
      // Handle final form submission
      console.log("Final form data:", formData);
      // Add your submission logic here
    }
  })

  const prevStep = useCallback(() => {
    if (formNumber > 1) {
      setFormNumber((prev) => prev - 1);
    }
  }, [formNumber]);

  const renderForm = () => {
    const props = {
      formData,
      updateFormData,
      onSubmit: nextStep
    };

    switch (formNumber) {
      case 1:
        return <FormOne {...props} />;
      case 2:
        return <FormTwo {...props} />;
      case 3:
        return <FormThree {...props} />;
      case 4:
        return <FormFour {...props} />;
      case 5:
        return <FormFive {...props} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full flex flex-col justify-around items-center bg-white shadow-md flex-[2] select-none h-[1000px]">
      <h1 className="text-3xl font-bold mb-4">تسجيل حساب مورد جديد</h1>
      <ProgressBar formNumber={formNumber} />
      <div className='w-[500px] shadowbox px-20 pb-10 pt-10'>
        {renderForm()}
        <div className='flex justify-between mt-6'>
          <Button 
            variant="outline"
            onClick={prevStep}
            disabled={formNumber === 1}
            className={`${formNumber === 1 ? 'invisible' : ''}`}
          >
            السابق
          </Button>
          <Button 
            type="submit"
            form={`form-${formNumber}`}
            variant="default"
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            {formNumber === 5 ? 'إرسال' : 'التالي'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;