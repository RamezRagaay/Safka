import React from 'react'
import LeftPanel from '@/components/pages/login/LeftPanel'
import RightPanel from '@/components/pages/login/RightPanel'


const page = () => {
  return (
    <div className='flex h-screen'>
            <RightPanel />
            <LeftPanel />
    </div>
  )
}

export default page
