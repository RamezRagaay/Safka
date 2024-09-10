"use client"
import { useState } from 'react'
import Image from 'next/image'
import { Star, Heart, ShoppingCart, ChevronRight, ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import ProductImages from './productImages'
import Rating from '@/components/atoms/Rating'
import ImageMagnifier from './ImageMagnify'

export default function SingleProductPage() {
  const [mainImage, setMainImage] = useState('/product-23.jpg')
  const [quantity, setQuantity] = useState(1)

  const productImages = [
    '/placeholder.svg?height=600&width=600',
    '/placeholder.svg?height=600&width=600',
    '/placeholder.svg?height=600&width=600',
    '/placeholder.svg?height=600&width=600',
  ]

  return (
    <div dir="rtl" className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Images */}
        <div className="md:w-1/2">
          <div className="relative aspect-square mb-4">
						<ImageMagnifier src={mainImage} width={'100%'} height={'100%'} />
					{/* <ReactImageMagnify
						{...{
							smallImage: {
								alt: 'Versace watch close-up',
								isFluidWidth: true,
								src: '/product-24.jpg',
							},
							largeImage: {
								src: '/product-24.jpg',
								width: '200%',
								height: '200%',
							},
							enlargedImagePosition: 'over',
							isEnlargedImagePortal: true,
							// enlargedImageContainerDimensions: {
							// 	width: '100%',
							// 	height: '100%',
							// },
							shouldUsePositiveSpaceLens: true,
						}}
					/> */}
            {/* <Image
              src={mainImage}
              alt="Product main image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            /> */}
          </div>
          <div className="grid grid-cols-4 gap-2">
              <button
                onClick={() => setMainImage('/product-24.jpg')}
                className="relative aspect-square"
              >
                <Image
                  src={'/product-24.jpg'}
                  // alt={`Product image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </button>
              <button
                onClick={() => setMainImage('/product-25.jpg')}
                className="relative aspect-square"
              >
                <Image
                  src={'/product-25.jpg'}
                  // alt={`Product image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </button>
          </div>
        </div>



        {/* Product Details */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">منتج رائع متعدد الاستخدامات</h1>
          <div className='flex items-center mb-2'>
              <Rating rate={3.5} />
              <p className='mr-2 text-sm text-gray-500'>(35)</p>
            </div>
          <p className="text-xl font-bold mb-4">199.99 ريال</p>
          <p className="text-gray-600 mb-6">
            هذا المنتج الرائع متعدد الاستخدامات هو إضافة مثالية لمنزلك. مصنوع من مواد عالية الجودة، يوفر الأداء والمتانة التي تحتاجها. مع تصميمه الأنيق، سيتناسب بسهولة مع أي ديكور.
          </p>

					
					{/* Color Selection V0.1.0 */}
          {/* <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">اللون</h3>
            <RadioGroup defaultValue="blue" className="flex gap-2">
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="blue" id="blue" className="bg-blue-500" />
                <Label htmlFor="blue">أزرق</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="red" id="red" className="bg-red-500" />
                <Label htmlFor="red">أحمر</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="green" id="green" className="bg-green-500" />
                <Label htmlFor="green">أخضر</Label>
              </div>
            </RadioGroup>
          </div> */}

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
  )
}