"use client"
import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"

export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      // ...
    </Carousel>
  )
}

const categories = [
  { name: "مواد غذائية", image: "/90460-2pk-Frozen-Handheld-2D-Steak-Bakes-2-1.png" , value:"food" },
  { name: "اثاث و مفروشات", image: "/CS105__98037.jpg" ,value:"furniture"} ,
  { name: "منظفات", image: "/1.png" ,value:"cleaning"} ,
  { name: "اجهزة و معدات", image: "/pngtree-modern-carpentry-tools-2d-vector-png-image_8861781.png" , value:"tools"} ,
  { name: "اجهزة الكترونية", image: "/electronic-devices-collection_23-2147659835.jpg" , value:"electronics" },
]

export default function CategoryCarousel() {
  return (
    <div className="w-full max-w-[95%] mx-auto py-16 container">
			<h1 className="text-2xl font-bold mb-4">التصنيفات :</h1>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
				plugins={[
					Autoplay({
						delay: 2000,
					}),
				]}
        dir="ltr"
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {categories.map((category, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row items-center sm:h-48">
                    <div className="relative w-full sm:w-1/2 aspect-video sm:h-full bg-white">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover p-5"
                      />
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center sm:w-1/2 p-6 bg-gradient-to-r from-primary/10 to-primary/5">
                      <h3 className="text-lg font-semibold text-center sm:text-right text-primary mb-3">{category.name}</h3>
											<Link href={`/products?categories=${category.value}`} className="text-sm text-muted-foreground text-center sm:text-right hover:underline">استكشف المزيد</Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="w-14 h-14 hover:bg-primary hover:text-primary-foreground duration-300 -left-7" />
        <CarouselNext className="w-14 h-14 hover:bg-primary hover:text-primary-foreground duration-300 -right-7" />
      </Carousel>
    </div>
  )
}