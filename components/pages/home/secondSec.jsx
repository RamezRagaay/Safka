import React from 'react'

const SecondSec = () => {
  return (
    <section className='container mt-[250px] flex flex-col'>
        <div className='flex justify-between'>

            <div className='flex flex-col items-end justify-center'>
                <h3 className='text-[36px] font-bold dark:text-secondary text-end'>إن كنت تاجر وتريد شراء البضائع !</h3>
                <p className='text-[32px] w-[445px] font-normal dark:text-primary text-end'>لا تحمل الهم يمكنك الأن التواصل مع المنتجين وشراء كافه المنتجات اللازمه لك بضغطه زر</p>
            </div>

            <img className='w-[595px]' src="https://s3-alpha-sig.figma.com/img/5498/b713/47dd4104b107c56399b712f8669ba3b0?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=irsRoS8BrZC-igI3DR0X3ZyUL63NIlyRmDjhiD~ktEsVKWEtcM~LIr3S6a3qyr5bSLx6Hoib9qCluz0nFECJN9IgfeMMbdGeyWq13ezC3Ok433AZakoe5t6ZWMyUpp1c2XwbZGrlaeyF~gvcwe-j63pjPIteaur-o7SIVZaHU4orsC6J5t3cLaRep7t-ywJ8TWfiXtHwuC113Kt0vGVs9ibE1N3tW6gT9iA7sCO~Gvg9JiT5InxyNr6L~sLw8EnRcuwbOtTv7QIY0s81JyIASSOPpVUYep4wirplfe6fevn1dxtt0N45F~o5~tKB2FNKfim631dYbu65ovN~LEOBNQ__" alt="store img" />
            
        </div>
        <button className='w-[480px] h-[49px] font-bold text-[24px] text-white bg-[#6F8FFE] rounded-[8px] text-center self-center'>سجل الأن</button>
    </section>
  )
}

export default SecondSec