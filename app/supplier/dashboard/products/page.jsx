import { SheetDemo } from '@/components/pages/mowrdPages/dashboard/products/AddProductSheet'
import { PlusIcon } from 'lucide-react'
import React from 'react'
import ProductsTable from '@/components/pages/mowrdPages/dashboard/products/productsTable';

const Page = () => {
  return (
    <>
        <div className=''>
            <div className='h-16 border-b px-4 flex items-center '>
                <h1 className='text-2xl font-semibold'>المخزن</h1>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-1 p-4'>
                    <h2 className='text-2xl font-semibold'>
                        منتجاتك 
                    </h2>
                    <p className='text-slate-400 text-md'>إدارة منتجاتك وحذفها وتعديلها</p>
                </div>
                <SheetDemo/>
                
            </div>
            <Suspense>
                <ProductsTable/>
            </Suspense>
        </div>
    </>
)
}

export default Page