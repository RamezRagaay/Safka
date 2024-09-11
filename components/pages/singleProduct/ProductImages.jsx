import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const productImages = [
  "/product-23.jpg",
	"/product-24.jpg",
	"/product-25.jpg",
]

export default function ProductPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + productImages.length) % productImages.length)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Thumbnails */}
        <div className="md:w-1/5 order-2 md:order-1">
          <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-y-auto md:h-[600px]">
            {productImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative w-20 h-20 flex-shrink-0 ${index === currentImageIndex ? 'ring-2 ring-primary' : ''}`}
              >
                <Image
                  src={img}
                  alt={`Product thumbnail ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Main Image */}
        <div className="md:w-4/5 order-1 md:order-2">
          <div className="relative aspect-video">
            <Image
              src={productImages[currentImageIndex]}
              alt="Product main image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <Button variant="outline" size="icon" onClick={prevImage} className="rounded-full bg-background/80 backdrop-blur-sm">
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextImage} className="rounded-full bg-background/80 backdrop-blur-sm">
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}