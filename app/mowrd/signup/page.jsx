import React from 'react'
import LeftPanel from '@/components/pages/mowrdPages/signup/LeftPanel'
import RightPanel from '@/components/pages/mowrdPages/signup/RightPanel'


const page = () => {
  return (
    <div className='flex h-screen'>
			<RightPanel />
			<LeftPanel />
    </div>
  )
}

export default page
