import ProductInfo from '@/components/pages/singleProduct/ProductInfo'
import React from 'react'
import { getAllProducts } from '@/services/products';
import SingleProductPage from '@/components/pages/singleProduct/singleProductDetails';

const Page = () => {
  return (
    <div className='container'>
        <SingleProductPage/>
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

