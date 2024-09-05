import React from 'react'
import LeftPanel from '@/components/pages/signup/LeftPanel'
import RightPanel from '@/components/pages/signup/RightPanel'


const page = () => {
  return (
    <div className='flex flex-col-reverse  md:flex-row min-h-dvh'>
            <RightPanel />
            <LeftPanel />
    </div>
  )
}

export default page
