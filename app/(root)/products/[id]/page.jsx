import ProductInfo from '@/components/pages/singleProduct/ProductInfo'
import React, { Suspense } from 'react'
import { Star, Heart, ShoppingCart, ChevronRight, ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Rating from '@/components/atoms/Rating'
import { Input } from "@/components/ui/input"
import { getAllProducts, getProduct } from '@/services/products';
import SingleProductPage from '@/components/pages/singleProduct/singleProductDetails';
import { Loader2 } from 'lucide-react';

export async function generateStaticParams() {
  const res = await getAllProducts(); 
  // console.log('Product Response:', res);

  return res.products?.map(product => ({
    id: product.id.toString(),
  }));
  
}
// const fetchProduct = async (id) => {
//   toString(id);
//   let url = `http://localhost:3000/api/product/`;
//   url = url + id;
  
//   const res = await fetch(url);
//   if (res.ok) {
//     const product = await res.json();
//     return product;
//   } else {
//     console.error('Error fetching product');
//   }
// };
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
        <div className="md:w-1/2">
          <div className="relative aspect-square mb-4">
				
        </div>



        {/* Product Details */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product?.product?.product_name}</h1>
          <div className='flex items-center mb-2'>
              <Rating rate={3.5} />
              <p className='mr-2 text-sm text-gray-500'>(35)</p>
            </div>
          <p className="text-xl font-bold mb-4">{product?.product?.price} ريال</p>
        {/* <section className="text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: product?.product?.description }} /> */}

				

          {/* Quantity Selection */}
          <div className="flex items-center mb-6">
            <Label htmlFor="quantity" className="mr-2">الكمية:</Label>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                // onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Input
                type="number"
                id="quantity"
                value={1}
                // onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 text-center mx-2"
              />
              <Button
                variant="outline"
                size="icon"
                // onClick={() => setQuantity(quantity + 1)}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>
          </div>

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
    </div>
      </Suspense>
    </div>
  )
}





