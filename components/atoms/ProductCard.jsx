'use client'
import React, { useState } from 'react'
import { FiHeart } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";

const ProductCard = () => {
  const [check, setCheck] = useState(false)
  return (
    <div className='w-56 h-[400px] border flex flex-col justify-start items-start'
    onMouseEnter={()=>setCheck(true)} onMouseLeave={()=>setCheck(false)}
    >
      

      <div className='h-1/2 w-full relative border-b overflow-hidden'>
        <div className='flex justify-center items-center p-3 max-h-full'>
          <img src='product-24.jpg' className = 'w-' alt="" />
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
        <p className='font-bold'>اسم المنتج</p>
        <p>وصف المنتج وصف المنتج وصف المنتج وصف المنتج</p>
        <p className='font-bold text-primary'>التقييم - عدد التقيمات</p>
        <p className='font-bold text-primary'> ١٠٠٠ ر.س </p>
        <p> <span className='font-bold'>المورد :</span> اسم المورد</p>
      </div>
    </div>
  )
}

export default ProductCard



{/* <div className='h-[260px] w-[270px] relative border-b '>
        <div className=' h-[260px] w-[270px] flex justify-center items-center p-5'>
          <img src={item.image} className=' max-h-[75%] max-w-[75%] ' alt="" />
        </div>
        <div className={` ${ check ? " opacity-100" : "opacity-0" } flex justify-center gap-3 items-center
          bg-[rgba(0,0,0,0.2)] h-full w-full absolute top-0 ease-in-out duration-300 ` }>
          <CardOption check={check} option={1} > <IoIosShuffle size = {"18"} /> </CardOption>
          <CardOption check={check} option={2} > <AiOutlineZoomIn size = {"18"} /> </CardOption>
          <CardOption check={check} option={3} > <IoMdHeartEmpty size = {"18"} /> </CardOption>
        </div>
      </div> */}
      
      
      // <div className='w-full max-h-1/2 flex justify-center items-center border-b transition-all'>
      //   {
      //     open ?
      //     <div className='flex flex-col justify-center items-center max-h-full'>
      //       <img src="product-23.jpg" alt=""/> 
      //       <div className='w-full bg-white flex justify-around items-center'>
      //         <button className='h-8 w-8 rounded-full hover:bg-primary hover:text-white
      //         flex justify-center items-center' ><BsCart3 size={15}/></button>
      //         <button className='h-8 w-8 rounded-full hover:bg-primary hover:text-white 
      //         flex justify-center items-center' ><FiHeart size={15}/></button>
      //       </div>
      //     </div>
      //     : 
      //     <img src="product-24.jpg" alt=""/>
      //   }
      // </div>