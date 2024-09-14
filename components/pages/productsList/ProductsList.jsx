
'use client'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { AlertCircle, Loader2 } from 'lucide-react'
import SideBar from './SideBar'
import ProductCard from '@/components/atoms/ProductCard'
import { Skeleton } from "@/components/ui/skeleton"
import ProductsPagination from './ProductsPagintaion'
import { getProducts } from '@/services/products'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ProductsList() {
  const [products, setProducts] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const params = useSearchParams()

  const sort = params.get("sort")
  const minPrice = params.get("price>") || ''
  const maxPrice = params.get("price<") || ''
  const category = params.get("categories") || ''
  const perPage = params.get("perPage") || 16
  const page = params.get("page") || 1
  const expand = params.get("expand") || "seller_id"
  const search = params.get("search") || ""

  const filter = `${minPrice && `price >= ${minPrice}`}${maxPrice && ` && price <= ${maxPrice}`}${category && (maxPrice || minPrice) && ` && `}${category && `category = '${category}' ${((maxPrice || minPrice || category || sort) && search) ? "&&" : ""}`}${search && ` (product_name ~ "${search}" || description ~ "${search}" )`}`

  const paramsObj = { sort, filter, perPage, page, expand }

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      setError(null)
      try {
        const { products } = await getProducts(paramsObj)
        setProducts(products)
      } 
      catch (error) {
        console.error(error)
        setError(error.message)
      } 
      finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [sort, minPrice, maxPrice, category, perPage, page, search])

  const renderContent = () => {
    if (loading) {
      return <LoadingSkeleton />
    }

    if (error) {
      return <ErrorMessage message={error} />
    }

    if (!products?.items?.length) {
      return <NoProductsFound />
    }

    return (
      <>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center items-center">
          {
            products.items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          }
        </div>
        <ProductsPagination totalPages={products.totalPages} />
      </>
    )
  }

  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-col justify-center xl:flex-row gap-8">
        <div className="w-full xl:w-1/5">
          <SideBar />
        </div>
        <div className="w-full xl:w-4/5">
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center items-center">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="flex flex-col space-y-3">
          <Skeleton className="h-[200px] w-full rounded-xl" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      ))}
    </div>
  )
}

function ErrorMessage({ message }) {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  )
}

function NoProductsFound() {
  return (
    <div className="text-center py-10">
      <h2 className="text-2xl font-semibold mb-2">No products found</h2>
      <p className="text-muted-foreground">Try adjusting your search or filter to find what you are looking for.</p>
    </div>
  )
}