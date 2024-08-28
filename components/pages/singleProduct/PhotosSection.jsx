"use client"
import ImageButton from '@/components/atoms/ImageButton'
import React, { useState } from 'react'

const PhotosSection = ({images}) => {
    const [open, setOpen] = useState(0)
  return (
    
    <div className='flex gap-5 xl:flex-row sm:flex-col-reverse'>
        <div className='flex xl:flex-col gap-4 sm:flex-row'>
            <ImageButton src={images[0]} onClick={() => setOpen(0)}/>
            <ImageButton src={images[1]} onClick={() => setOpen(1)}/>
            <ImageButton src={images[2]} onClick={() => setOpen(2)}/>
        </div>
        <img src={images[open] } alt="ipad" className='object-fill border w-96 h-96 xl:ml-14'/>
    </div>
  )
}

export default PhotosSection