import React from 'react'

const ThirdSec = () => {
  return (
    <section className='container mx-auto py-[250px] flex flex-col'>
        <div className='flex justify-between'>
            <img className='w-[595px]' src="https://www.figma.com/file/bHDnxNFUleVaB9r06h89WL/image/afbb12243f2dfd9e2c8dc015660d94b5c135943b" alt="store img" />

            <div className='flex flex-col items-end justify-center'>
                <h3 className='text-[36px] font-bold dark:text-secondary text-end w-[536px]'>اكتشف أحدث الصيحات والموضة لكامل أناقتك</h3>
                <p className='text-[32px] w-[445px] font-normal dark:text-primary text-end'>خصومات هائلة على جميع منتاجتنا مما يميزنا عن الاخرون </p>
            </div>

        </div>
        <button className='w-[480px] h-[49px] font-bold rounded-[5px] border-[#6F8FFE]  border-[1.5px]  text-[#6F8FFE] dark:text-primary self-center'>Downloads App</button>
    </section>
  )
}

export default ThirdSec