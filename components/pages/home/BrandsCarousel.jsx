"use client"
import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const brands = [
  {
    name: "CL1",
    image: "/cl_logo1.png",
  },
  {
    name: "CL2",
    image: "/cl_logo2.png",
  },
  {
    name: "CL3",
    image: "/cl_logo3.png",
  },
  {
    name: "CL4",
    image: "/cl_logo4.png",
  },
  {
    name: "CL5",
    image: "/cl_logo5.png",
  },
  {
    name: "CL6",
    image: "/cl_logo6.png",
  },
]

export default function BrandsCarousel() {
  return (
    <div className="w-full max-w-[95%] mx-auto py-16 container select-none my-5">
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
        <CarouselContent>
        {brands.map((brand, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/5 flex justify-center items-center">
              <Image src={brand.image} alt={brand.name} width={180} height={180} />
            </CarouselItem>
        ))}
        </CarouselContent>
        {/* <CarouselPrevious className="w-14 h-14 hover:bg-primary hover:text-white duration-300 -left-7" />
        <CarouselNext className="w-14 h-14 hover:bg-primary hover:text-white duration-300 -right-7" /> */}
      </Carousel>
    </div>
  )
}