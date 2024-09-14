import React, { Suspense } from 'react'
import { Star, Heart, ShoppingCart, ChevronRight, ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Rating from '@/components/atoms/Rating'
import { Input } from "@/components/ui/input"
import { getAllProducts, getProduct } from '@/services/products';
import { Loader2 } from 'lucide-react';
import ProductPage from '@/components/pages/singleProduct/ProductImages'
import ProductImages from '@/components/pages/singleProduct/ProductImages'
import Image from 'next/image'
import QuantitySelection from '@/components/pages/singleProduct/QuantitySelection'

export async function generateStaticParams() {
  const res = await getAllProducts(); 
  // console.log('Product Response:', res);

  return res.products?.map(product => ({
    id: product.id.toString(),
  }));
  
}
export default async function Page({ params }){
  const { id } = params;
  const product = await getProduct(id);
  // console.log("product: ", product);
  return (
    <div className='container'>
      <Suspense fallback={<Loader2 className="h-10 w-10 animate-spin" />}>
        {/* <SingleProductPage id={id}/> */}
      <div dir="rtl" className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Images */}
        {
        product.product.product_images.length > 0 ?
        <ProductImages product={product.product}/>
        :
        <img src={'/no_img_avaliable.jpg'} className="w-3/5 h-3/5" />
        }
        {/* https://round-feather-2cdc.safka-middlewares-v0.workers.dev/api/files/${product.collectionId}/${product.id}/${product.product_images[0] */}
        {/* Product Details */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product?.product?.product_name}</h1>
          <div className='flex items-center mb-2'>
              <Rating rate={3.5} />
              <p className='mr-2 text-sm text-gray-500'>(35)</p>
            </div>
          <p className="text-xl font-bold mb-4">{product?.product?.price} ريال</p>
        <section className="text-gray-600 mb-6" id='description'>
          <p className="text-gray-500">{product?.product?.description}</p>
        </section>

				

          {/* Quantity Selection */}
          <QuantitySelection maxQuantity={product.product.quantaty}/>

          {/* Add to Cart and Wishlist */}
          <div className="flex gap-4 mb-6">
            <Button className="flex-1">
              <ShoppingCart className="mr-2 h-4 w-4" /> إضافة إلى السلة
            </Button>
            <Button variant="outline">
              <Heart className="mr-2 h-4 w-4" /> إضافة إلى قائمة الرغبات
            </Button>
          </div>

          {/* Additional Information */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-2">معلومات إضافية</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>ضمان لمدة سنة</li>
              <li>شحن مجاني للطلبات فوق 500 ريال</li>
              <li>متوفر للاستلام من المتجر</li>
            </ul>
          </div>


        </div>
        
        </div>
        </div>
      </Suspense>
    </div>
  )
}





