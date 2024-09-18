"use client"
import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import ProductCard from '@/components/atoms/ProductCard';
import { getProducts } from '@/services/products'

export default function HotDeals() {
    const [products, setProducts] = React.useState(null)
    
    React.useEffect(() => {
        const fetchProducts = async () => {
            try {
            const { products } = await getProducts({perPage: 7, page: 1})
            setProducts(products)
            console.log(products);
            
            } 
            catch (error) {
            console.error(error)
            } 
            finally {
            
            }
        }

        fetchProducts()
        }, [])
  return (
    <div className="w-full max-w-[95%] mx-auto py-16 container">
			<h1 className="text-2xl font-bold mb-4">احدث العروض :</h1>
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
            {
                products?.items?.map((product) => (
                    <CarouselItem  className=" md:basis-1/2 lg:basis-1/3 xl:basis-1/4 select-none">
                    <ProductCard key={product.id} product={product} offer={50} />
                    </CarouselItem>
                ))
            }
        </CarouselContent>
        <CarouselPrevious className="w-14 h-14 hover:bg-primary hover:text-white duration-300 -left-7" />
        <CarouselNext className="w-14 h-14 hover:bg-primary hover:text-white duration-300 -right-7" />
      </Carousel>
    </div>
  )
}