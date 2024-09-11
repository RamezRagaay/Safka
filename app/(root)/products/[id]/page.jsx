import ProductInfo from '@/components/pages/singleProduct/ProductInfo'
import React, { Suspense } from 'react'
import { getAllProducts } from '@/services/products';
import SingleProductPage from '@/components/pages/singleProduct/singleProductDetails';
import { Loader2 } from 'lucide-react';

const Page = ({ params }) => {
  const { id } = params
  return (
    <div className='container'>
      <Suspense fallback={<Loader2 className="h-10 w-10 animate-spin" />}>
        <SingleProductPage id={id}/>
      </Suspense>
    </div>
  )
}

export default Page


export async function generateStaticParams() {
  const res = await getAllProducts(); 
  // console.log('Product Response:', res);

  return res.products?.map(product => ({
    id: product.id.toString(),
  }));

}

