import React from 'react'
import { Button } from '../ui/button'

const ImageButton = ({src, onClick}) => {
  return (
    <Button variant="outline" size="icon" onClick={onClick} asChild>
      <img src={src} alt="ipad" className='object-contain w-12 h-12 cursor-pointer' />
    </Button>
  )
}

export default ImageButton