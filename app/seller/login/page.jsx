import React from 'react'
import LeftPanel from '@/components/pages/seller/login/LeftPanel'
import RightPanel from '@/components/pages/seller/login/RightPanel'

const Page = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row h-dvh'>
      <RightPanel />
      <LeftPanel />
    </div>
  )
}

export default Page