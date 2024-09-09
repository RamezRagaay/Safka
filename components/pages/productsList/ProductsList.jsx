// 'use client'
// import React, { useEffect, useState } from 'react';
// import SideBar from './SideBar';
// import ProductCard from '@/components/atoms/ProductCard';
// import { useSearchParams } from 'next/navigation';
// import { Skeleton } from "@/components/ui/skeleton"
// import ProductsPagintaion from './ProductsPagintaion';
// import { getProducts } from '@/services/products';



// const ProductsList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const params = useSearchParams();

//   const sort = params.get("sort");
//   const minPrice = params.get("price>") || '';
//   const maxPrice = params.get("price<") || '';
//   const category = params.get("categories") || '';
//   const perPage = params.get("perPage") || 16; // * Set default values if needed
//   const page = params.get("page") || 1;
//   const expand = params.get("expand") || "seller_id";
//   const search = params.get("search") || "";
//   // const rsc = params.get("_rsc") || "";

//   const  filter = `${minPrice && `price >= ${minPrice}`}${maxPrice && ` && price <= ${maxPrice}`}${ category && (maxPrice || minPrice)&& ` && `}${category && `category = '${category}' ${((maxPrice || minPrice || category || sort) && search) ? "&&" : ""}`}${search && ` (product_name ~ "${search}" || description ~ "${search}" )`}`;

//   const paramsObj = { sort, filter, perPage, page, expand };

//   const productList = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const { products } = await getProducts(paramsObj);
//       setProducts(products);
//     } 
//     catch (error) {
//       console.error(error);
//       setError(error.message);
//     } 
//     finally {
//       setLoading(false);
//     }
//   };

//   async function productListFetch() {
//     try{
//       const res = await getProducts(paramsObj);
//       setProducts(res.products);
//     }
//     catch(error){
//       console.log(error);
//     }
//     finally{
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     setLoading(true);
//     productListFetch();
//     console.log("refreshed");
    
//   }, [sort, minPrice, maxPrice, category, perPage, page, search]); // * Refined dependency array

//   // useEffect(() => {
//   //   console.log("prarams : ", paramsObj);
//   //   console.log( "products : ", products);
//   // }, [products]);

//   return (
//     <div className='container mx-auto my-10 flex justify-start items-center'>
//       <div className='flex gap-12 w-full'>
//       <SideBar />
//       {
//         loading ? 
//         <div className=' border flex flex-col justify-start items-center gap-5'>
//           <div className=' grid gap-2 p-5 md:grid-cols-4 grid-cols-1 justify-center items-center'>
//             <div className="flex flex-col space-y-3">
//               <Skeleton className="h-[125px] w-[210px] rounded-xl" />
//               <div className="space-y-2">
//             <Skeleton className="h-4 w-[210px]" />
//             <Skeleton className="h-4 w-[200px]" />
//           </div>
//             </div>
//             <div className="flex flex-col space-y-3">
//               <Skeleton className="h-[125px] w-[210px] rounded-xl" />
//               <div className="space-y-2">
//             <Skeleton className="h-4 w-[210px]" />
//             <Skeleton className="h-4 w-[200px]" />
//           </div>
//             </div>
//             <div className="flex flex-col space-y-3">
//               <Skeleton className="h-[125px] w-[200] rounded-xl" />
//               <div className="space-y-2">
//             <Skeleton className="h-4 w-[200]" />
//             <Skeleton className="h-4 w-[200px]" />
//           </div>
//             </div>
//             <div className="flex flex-col space-y-3">
//               <Skeleton className="h-[125px] w-[210px] rounded-xl" />
//               <div className="space-y-2">
//             <Skeleton className="h-4 w-[210px]" />
//             <Skeleton className="h-4 w-[200px]" />
//           </div>
//             </div>
//             <div className="flex flex-col space-y-3">
//               <Skeleton className="h-[125px] w-[210px] rounded-xl" />
//               <div className="space-y-2">
//             <Skeleton className="h-4 w-[210px]" />
//             <Skeleton className="h-4 w-[200px]" />
//           </div>
//             </div>
//             <div className="flex flex-col space-y-3">
//               <Skeleton className="h-[125px] w-[210px] rounded-xl" />
//               <div className="space-y-2">
//             <Skeleton className="h-4 w-[210px]" />
//             <Skeleton className="h-4 w-[200px]" />
//           </div>
//             </div>
            
//             <div className="flex flex-col space-y-3">

//               <Skeleton className="h-[125px] w-[210px] rounded-xl" />
//               <div className="space-y-2">
//             <Skeleton className="h-4 w-[210px]" />
//             <Skeleton className="h-4 w-[200px]" />
//           </div>
//             </div>
//           </div>
//           </div>
//         :
//         products?.items?.length === 0 || products === undefined ? 
//           <p>No products found.</p>
//         :
//         <div className=' border flex flex-col justify-start items-center gap-5'>
//           <div className=' grid md:grid-cols-4 grid-cols-1 justify-center items-center'>
//               {
//                 products?.items?.map((product) => (
//                   <ProductCard key={product.id} product={product} />
//                 ))
//               }
//           </div>
//           <ProductsPagintaion totalPages={products.totalPages} />
//       </div>
//       }
      
//       </div>
//     </div>
//   );
// };

// export default ProductsList;


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
      } catch (error) {
        console.error(error)
        setError(error.message)
      } finally {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <ProductsPagination totalPages={products.totalPages} />
      </>
    )
  }

  return (
    <div className="container mx-auto my-10 rtl:mr-auto rtl:ml-0" dir="rtl">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <SideBar />
        </div>
        <div className="w-full md:w-3/4">
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
      <p className="text-muted-foreground">Try adjusting your search or filter to find what you're looking for.</p>
    </div>
  )
}