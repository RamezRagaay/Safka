import ProductInfo from '@/components/pages/singleProduct/ProductInfo'
import React from 'react'
import { getAllProducts } from '@/services/products';

const Page = () => {
  return (
    <div className='container'>
        <ProductInfo/>
        
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

