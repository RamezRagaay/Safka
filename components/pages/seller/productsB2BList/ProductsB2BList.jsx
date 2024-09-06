'use client'
import React, { useEffect, useState } from 'react';
import SideBar from './SideBarB2B';
import ProductB2BCard from '@/components/atoms/ProductB2BCard';
import { useSearchParams } from 'next/navigation';
import { Skeleton } from "@/components/ui/skeleton"
import ProductsPagintaion from '@/components/pages/productsList/ProductsPagintaion';
import { getProductsB2B } from '@/services/products_b2b';
import NavbarB2B from './NavbarB2B';
import Footer from '@/components/shared/Footer';



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


  const  filter = `${minPrice && `price_per_unit >= ${minPrice}`}${maxPrice && ` && price_per_unit <= ${maxPrice}`}${ category && (maxPrice || minPrice)&& ` && `}${category && `category = '${category}'`}`

  const paramsObj = { sort, filter, perPage, page, expand };

  const productListB2B = async () => {
    setLoading(true);
    setError(null);
    try {
      const { products } = await getProductsB2B(paramsObj);
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


  async function productListB2BFetch() {
    try{
      const res = await getProductsB2B(paramsObj);
      setProducts(res.products);
    }
    catch(error){
      console.log(error);
    }
    finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    productListB2BFetch();
  }, [sort, minPrice, maxPrice, category, perPage, page]); // * Refined dependency array


  useEffect(() => {
    console.log("prarams : ", paramsObj);
    console.log( "products : ", products);
  }, [products]);

  return (
    <>
      <NavbarB2B />
      <div className='container mx-auto my-10 flex justify-start items-center'>
        <div className='flex gap-12 w-full'>
        <SideBar />
        {
          loading ? 
          <div className=' border flex flex-col justify-start items-center gap-5'>
            <div className=' grid gap-2 p-5 md:grid-cols-4 grid-cols-1 justify-center items-center'>
              <div className="flex flex-col space-y-3">
                <Skeleton className="h-[125px] w-[210px] rounded-xl" />
                <div className="space-y-2">
              <Skeleton className="h-4 w-[210px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
              </div>
              <div className="flex flex-col space-y-3">
                <Skeleton className="h-[125px] w-[210px] rounded-xl" />
                <div className="space-y-2">
              <Skeleton className="h-4 w-[210px]" />
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
                <Skeleton className="h-[125px] w-[210px] rounded-xl" />
                <div className="space-y-2">
              <Skeleton className="h-4 w-[210px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
              </div>
              <div className="flex flex-col space-y-3">
                <Skeleton className="h-[125px] w-[210px] rounded-xl" />
                <div className="space-y-2">
              <Skeleton className="h-4 w-[210px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
              </div>
              <div className="flex flex-col space-y-3">
                <Skeleton className="h-[125px] w-[210px] rounded-xl" />
                <div className="space-y-2">
              <Skeleton className="h-4 w-[210px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
              </div>
              <div className="flex flex-col space-y-3">
                <Skeleton className="h-[125px] w-[210px] rounded-xl" />
                <div className="space-y-2">
              <Skeleton className="h-4 w-[210px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
              </div>
            </div>
            </div>
          :
          products?.items?.length === 0 || products === undefined ? 
            <p>No products found.</p>
          :
          <div className=' border flex flex-col justify-start items-center gap-5'>
            <div className=' grid md:grid-cols-4 grid-cols-1 justify-center items-center'>
                {
                  products?.items?.map((product) => (
                    <ProductB2BCard key={product.id} product={product} />
                  ))
                }
            </div>
            <ProductsPagintaion totalPages={products.totalPages} />
        </div>
        }
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsList;


