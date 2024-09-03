// "use client"
import ProductCard from '@/components/atoms/ProductCard'
import CategoriesSwiper from '@/components/pages/home/CategoriesSwiper'
import HeaderSwiper from '@/components/pages/home/HeaderSwiper'
import OneCategorySwiper from '@/components/pages/home/OneCategorySwiper'
import React from 'react'
// import { getProducts, getProduct } from '@/services/products'
// import { useEffect, useState } from "react"
// import { useSearchParams } from 'next/navigation'

const Page = () => {
  // const [products, setProducts] = useState([])
  // const [product, setProduct] = useState(null)
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(null)
  // const params = useSearchParams()
  // const sort = params.get("sort")
  // const filter = params.get("filter")
  // const perPage = params.get("perPage")
  // const page = params.get("page")
  // const expand = params.get("expand")
  // const paramsObj = {
  //   sort: sort,
  //   filter: filter,
  //   perPage: perPage,
  //   page: page,
  //   expand: expand
  // }
  // const productList = async () => {
  //   setLoading(true)
  //   setError(null)
  //   try {
  //     const { products } = await getProducts(paramsObj)
  //     setProducts(products)
  //   } catch (error) {
  //     console.error(error)
  //     setError(error.message)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  // const getSingleProduct = async (id) => {
  //   try {
  //     const { product } = await getProduct(id, {expand: 'seller_id'})
  //     setProduct(product)
  //     // console.log(product)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }


  // useEffect(() => {
  //   console.log("prarams : ", paramsObj);
  //   productList()
  //   getSingleProduct('x4fo6248wjjxltp')
  // }, [])

  // useEffect(() => {
  //   console.log(products);
  //   console.log(product);
  // }, [products, product])

  return (
    <div className=''>
      <HeaderSwiper />
      <CategoriesSwiper/>
      <OneCategorySwiper title={"أكثر المبيعات"} />
      <OneCategorySwiper title="الكترونيات"/>
      <OneCategorySwiper title="المنتجات"/>
      <OneCategorySwiper title="المتاجر"/>
    </div>
  )
}

export default Page