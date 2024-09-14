// 'use client'
// import React, { useState } from 'react'
// import { FiHeart } from "react-icons/fi";
// import { BsCart3 } from "react-icons/bs";
// import Rating from './Rating';

// function truncateProductName(name, wordLimit) {
//   const words = name.split(" ");
  
//   if (words.length > wordLimit) {
//     return words.slice(0, wordLimit).join(" ") + " ...";
//   }
  
//   return name;
// }


// const ProductB2BCard = ({product}) => {
//   const [check, setCheck] = useState(false)
//   return (
//     <div className='w-56 h-[400px] border flex flex-col justify-start items-start'
//     onMouseEnter={()=>setCheck(true)} onMouseLeave={()=>setCheck(false)}
//     >
//       <div className='h-1/2 w-full relative border-b overflow-hidden'>
//         <div className='flex justify-center items-center p-3 max-h-full'>
//           <img src={product.product_images[0]} alt="" />
//         </div>
//         <div className={` ${ check ? " opacity-100" : "opacity-0" } flex justify-center gap-3 items-center
//           bg-[rgba(0,0,0,0.2)] h-full w-full absolute top-0 ease-in-out duration-300 ` } dir='ltr'>
//             <button className={` ${check ? " translate-y-2 " : " translate-y-7 "} 
//               flex justify-center items-center text-2xl h-11 w-11 rounded-full
//               bg-white hover:bg-primary hover:text-white ease-in-out duration-300`}>
//               <BsCart3 size={18}/>
//             </button>
//             <button className={` ${check ? " translate-y-2 " : " translate-y-7 "} 
//               flex justify-center items-center text-2xl h-11 w-11 rounded-full
//               bg-white hover:bg-primary hover:text-white ease-in-out duration-300 delay-75`}>
//               <FiHeart size={18}/>
//             </button>
//         </div>
//       </div>

//       <div className='w-full p-3'>
//         <p className='font-semibold'>{truncateProductName(product.product_name, 10)}</p>
//         {/* <p>وصف المنتج وصف المنتج وصف المنتج وصف المنتج</p> */}
//         {/* <p className='font-bold text-primary'>التقييم - عدد التقيمات</p> */}
//         {/* <div className='flex items-center'>
//           <Rating rate={3.75}/>
//           <p className='mr-2 font-normal text-slate-500'>{`(300)`}</p>
//         </div> */}
//         <p className='font-bold text-primary'>{product.price_per_unit}</p>
//         {/* <p> <span className='font-bold'>المورد :</span> اسم المورد</p> */}
//       </div>
//     </div>
//   )
// }

// export default ProductB2BCard



'use client'
import React, { useState } from 'react'
import { FiHeart } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import Rating from './Rating';
import * as Tooltip from '@radix-ui/react-tooltip';
import Link from 'next/link';

function truncateProductName(name, wordLimit) {
  const words = name.split(" ");
  return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + " ..." : name;
}



const ProductCardB2B = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false)
  console.log(product);
    
  return (
    <Tooltip.Provider delayDuration={300}>
      <div 
        className='w-full xl:w-64 h-[400px] border flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-lg rounded-lg overflow-hidden scale-90'
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
        dir="rtl"
      >
        <div className='relative h-1/2 w-full border-b overflow-hidden bg-white'>
          <div className='flex justify-center items-center p-3 h-full'>
            <img src={product.product_images[0] ?
            `https://round-feather-2cdc.safka-middlewares-v0.workers.dev/api/files/${product.collectionId}/${product.id}/${product.product_images[0]}`
          :
          '/no_img_avaliable.jpg'} alt={product.product_name} className="object-contain max-h-full max-w-full rounded transition-transform duration-300 hover:scale-105" />
          </div>
          <div className={`absolute inset-0 flex justify-center items-center gap-3 bg-black bg-opacity-20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button className={`flex justify-center items-center h-11 w-11 rounded-full bg-white hover:bg-primary hover:text-white transition-all duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-7'}`}>
                  <BsCart3 size={18} />
                  <span className="sr-only">إضافة إلى السلة</span>
                </button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="bg-white px-2 py-1 rounded shadow-md text-sm"
                  sideOffset={5}
                >
                  إضافة إلى السلة
                  <Tooltip.Arrow className="fill-white" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
            
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button className={`flex justify-center items-center h-11 w-11 rounded-full bg-white hover:bg-primary hover:text-white transition-all duration-300 delay-75 ${isHovered ? 'translate-y-0' : 'translate-y-7'}`}>
                  <FiHeart size={18} />
                  <span className="sr-only">إضافة إلى المفضلة</span>
                </button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="bg-white px-2 py-1 rounded shadow-md text-sm"
                  sideOffset={5}
                >
                  إضافة إلى المفضلة
                  <Tooltip.Arrow className="fill-white" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </div>
        </div>

        <Link href={`/products/${product.id}`} className='flex-grow p-4 flex flex-col justify-between'>
          <div>
            <h3 className='font-semibold text-lg mb-2 line-clamp-2 capitalize'>{truncateProductName(product.product_name, 5)}</h3>
            <div className='flex items-center mb-2'>
              <Rating rate={3.5} />
              <p className='mr-2 text-sm text-gray-500'>(35)</p>
            </div>
            <p className='text-sm text-gray-600 mb-2'>التاجر: {product?.expand?.provider?.username}</p>
          </div>
          <div className='mt-auto flex justify-between items-center'>
            <p className='font-bold text-primary text-lg'>{product.price_per_unit.toFixed(2)} ريال</p>
          </div>
        </Link>
        
      </div>
    </Tooltip.Provider>
  )
}

export default ProductCardB2B