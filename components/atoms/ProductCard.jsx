'use client'
import React, { useState } from 'react'
import { FiHeart } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import Rating from './Rating';


function truncateProductName(name, wordLimit) {
  const words = name.split(" ");
  
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + " ...";
  }
  
  return name;
}


const ProductCard = ({product}) => {
  const [check, setCheck] = useState(false)
  return (
    <div className='w-56 h-[400px] border flex flex-col justify-start items-start'
    onMouseEnter={()=>setCheck(true)} onMouseLeave={()=>setCheck(false)}
    >
      <div className='h-1/2 w-full relative border-b overflow-hidden'>
        <div className='flex justify-center items-center p-3 max-h-full'>
          <img src={product.product_images[0]} alt="" />
        </div>
        <div className={` ${ check ? " opacity-100" : "opacity-0" } flex justify-center gap-3 items-center
          bg-[rgba(0,0,0,0.2)] h-full w-full absolute top-0 ease-in-out duration-300 ` } dir='ltr'>
            <button className={` ${check ? " translate-y-2 " : " translate-y-7 "} 
              flex justify-center items-center text-2xl h-11 w-11 rounded-full
              bg-white hover:bg-primary hover:text-white ease-in-out duration-300`}>
              <BsCart3 size={18}/>
            </button>
            <button className={` ${check ? " translate-y-2 " : " translate-y-7 "} 
              flex justify-center items-center text-2xl h-11 w-11 rounded-full
              bg-white hover:bg-primary hover:text-white ease-in-out duration-300 delay-75`}>
              <FiHeart size={18}/>
            </button>
        </div>
      </div>

      <div className='w-full p-3'>
        <p className='font-semibold'>{truncateProductName(product.product_name, 10)}</p>
        {/* <p>وصف المنتج وصف المنتج وصف المنتج وصف المنتج</p> */}
        {/* <p className='font-bold text-primary'>التقييم - عدد التقيمات</p> */}
        {/* <div className='flex items-center'>
          <Rating rate={3.75}/>
          <p className='mr-2 font-normal text-slate-500'>{`(300)`}</p>
        </div> */}
        <p className='font-bold text-primary'>{product.price}</p>
        {/* <p> <span className='font-bold'>المورد :</span> اسم المورد</p> */}
      </div>
    </div>
  )
}

export default ProductCard