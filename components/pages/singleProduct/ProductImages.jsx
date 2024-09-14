'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Star, Heart, ShoppingCart, ChevronRight, ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
// import ProductImages from './productImages'
import Rating from '@/components/atoms/Rating'
import ImageMagnifier from './ImageMagnify'
const productImages = [
  "/product-23.jpg",
	"/product-24.jpg",
	"/product-25.jpg",
]

export default function ProductImages({product}) {
  const img_base_url = `https://round-feather-2cdc.safka-middlewares-v0.workers.dev/api/files/${product.collectionId}/${product.id}/`
  const [mainImage, setMainImage] = useState(`${img_base_url}${product.product_images[0]} `)
  
  const [quantity, setQuantity] = useState(1)
  

  return (
    <div className="md:w-1/2">
          <div className="relative aspect-square mb-4">
          <ImageMagnifier src={mainImage} width={'100%'} height={'100%'} />
          </div>
          <div className="grid grid-cols-4 gap-2">
              {product.product_images.map((image, index) => (
                <button
                onClick={() => setMainImage(`${img_base_url}${product.product_images[index]}`)}
                className="relative aspect-square"
              >
                <Image
                  src={`${img_base_url}${product.product_images[index]}`}
                  alt={`Product image`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md"
                />
              </button>
              ))}
              
          </div>
        </div>
  )
}