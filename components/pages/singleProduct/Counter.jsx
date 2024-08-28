"use client"
import { Button } from '@/components/ui/button';
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';

const Counter = () => {

    const [count, setCount] = React.useState(1)

    const handleCounter = () => {
        const value = parseInt(event.target.value, 10);

        if(!isNaN(value) && value > 0) {
            setCount(value);
        }
    } 

    const handleSubmit = () => {
        toast.success(` تمت إضافة العنصر إلى سلة التسوق`), {
            duration: 2000,
        }
    }


  return (
      <div className='flex justify-center items-center gap-10 mt-10'>
        <Toaster
        position="bottom-left"
        />
        <div  className='flex justify-center items-center'>
            <button className={`w-10 h-10 scale-90 font-bold bg-gray-100 rounded-full ${count == 1 && `disabled`}`} onClick={() => {
                if(count > 1){
                    setCount(count - 1)
                }
                
            }}>-</button>


            <input 
            className='text-center input-cnt w-[50px] h-[30px] border-2 mx-[20px] text-[24px] flex justify-center items-center'
            type="number"
            value={count}
            min={1}
            max={10}
            onChange={handleCounter}
            />


            <button className='w-10 h-10 scale-90 font-bold bg-gray-100 rounded-full' onClick={() => {
                if(count < 10)
                setCount(count + 1)
            }}>+
            </button>
        </div>

        <Button size="sm" variant="default"   onClick={handleSubmit}>اضف الي عربة التسوق</Button>
        
    </div>
    
  )
}

export default Counter