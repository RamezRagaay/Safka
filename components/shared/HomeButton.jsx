import React from 'react'
import Link from 'next/link'

const HomeButton = ({className}) => {
  return (
    <button className={`${className} hover:text-primary-dark text-primary font-bold text-4xl duration-300`} variant='ghost'>
      <Link href='/'>صفقه</Link>
    </button>
  )
}

export default HomeButton