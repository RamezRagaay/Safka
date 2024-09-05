'use client'
import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';
import ProductCard from '@/components/atoms/ProductCard';
// import { getProducts } from '@/services/products';
import { useSearchParams } from 'next/navigation';
import { Skeleton } from "@/components/ui/skeleton"

// ? getProducts service start.
import PocketBase from 'pocketbase';
import ProductsPagintaion from './ProductsPagintaion';
import { ClipLoader } from 'react-spinners';
const pb = new PocketBase('http://ip-intel.gl.at.ply.gg:30265/');
pb.autoCancellation(false);

export const getProducts = async (params) => {
  try {
    const products = await pb.collection('products').getList(params.page, params.perPage, {
      sort: params.sort,
      filter: params.filter,
      expand: params.expand
    });
    return { products };
  } catch (error) {
    console.error(error);
    return { products: [] };
  }
};
// ? getProducts service end.



const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = useSearchParams();

  const sort = params.get("sort");
  const minPrice = params.get("price>") || '';
  const maxPrice = params.get("price<") || '';
  const category = params.get("categories") || '';
  const perPage = params.get("perPage") || 2; // * Set default values if needed
  const page = params.get("page") || 1;
  const expand = params.get("expand") || "seller_id";


  const  filter = `${minPrice && `price >= ${minPrice}`}${maxPrice && ` && price <= ${maxPrice}`}${ category && (maxPrice || minPrice)&& ` && `}${category && `category = '${category}'`}`
  // const filter = [
  //   minPrice && `price >= ${minPrice}`,
  //   maxPrice && `price <= ${maxPrice}`,
  //   category && `category = '${category}'`
  // ]
  // .filter(Boolean)
  // .join(' AND '); // Combine filters properly

  const paramsObj = { sort, filter, perPage, page, expand };

  const productList = async () => {
    setLoading(true);
    setError(null);
    try {
      const { products } = await getProducts(paramsObj);
      setProducts(products);
    } 
    catch (error) {
      console.error(error);
      setError(error.message);
    } 
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    productList();
  }, [sort, minPrice, maxPrice, category, perPage, page, expand]); // * Refined dependency array


  useEffect(() => {
    console.log("prarams : ", paramsObj);
    console.log( "products : ", products);
  }, [products]);
  return (
    <div className='container mx-auto my-10 flex justify-start items-center'>
      <div className='flex gap-12 w-full'>
      <SideBar />
      {
        loading ? 
        <div className=' border flex flex-col justify-start items-center gap-5'>
          <div className=' grid gap-2 p-5 md:grid-cols-4 grid-cols-1 justify-center items-center'>
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[200] rounded-xl" />
              <div className="space-y-2">
            <Skeleton className="h-4 w-[200]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
            </div>
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[200] rounded-xl" />
              <div className="space-y-2">
            <Skeleton className="h-4 w-[200]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
            </div>
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[200] rounded-xl" />
              <div className="space-y-2">
            <Skeleton className="h-4 w-[200]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
            </div>
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[200] rounded-xl" />
              <div className="space-y-2">
            <Skeleton className="h-4 w-[200]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
            </div>
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[200] rounded-xl" />
              <div className="space-y-2">
            <Skeleton className="h-4 w-[200]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
            </div>
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[200] rounded-xl" />
              <div className="space-y-2">
            <Skeleton className="h-4 w-[200]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
            </div>
            
            <div className="flex flex-col space-y-3">

              <Skeleton className="h-[125px] w-[200] rounded-xl" />
              <div className="space-y-2">
            <Skeleton className="h-4 w-[200]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
            </div>
          </div>
          </div>
        :
        products?.items?.length === 0 ? 
          <p>No products found.</p>
        :
        <div className=' border flex flex-col justify-start items-center gap-5'>
          <div className=' grid md:grid-cols-4 grid-cols-1 justify-center items-center'>
              {
                products?.items?.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              }
          </div>
          <ProductsPagintaion totalPages={products.totalPages} />
      </div>
      }
      
      </div>
    </div>
  );
};

export default ProductsList;


