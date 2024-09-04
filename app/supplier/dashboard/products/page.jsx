import { PlusIcon } from 'lucide-react'
import React from 'react'

const Page = () => {
  return (
    <>
        <button className='mt-12 mr-12 flex items-center h-12 gap-2 p-4 rounded-3xl bg-slate-200 text-slate-700 hover:bg-slate-300 transition-all duration-300'>
            <PlusIcon className='w-8 h-8 rounded-full bg-primary text-slate-100'/>
            <span className='text-2xl font-semibold'>
                إضافة منتج
            </span>
        </button>
    </>
)
}

export default Page