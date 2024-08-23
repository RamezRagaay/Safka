import React from 'react'
import ToggleThemeButton from '../atoms/toggleThemeButton'

const NavBar = () => {
  return (
    <div className='bg-secondary'>
        <div className='container mx-auto flex justify-between items-center h-[67px]'>
            <ToggleThemeButton />
            <h1 className='text-3xl font-bold text-primary-light dark:text-primary-dark'>صفقة</h1>
        </div>
    </div>
  )
}

export default NavBar