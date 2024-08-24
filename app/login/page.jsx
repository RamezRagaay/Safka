import LoginForm from '@/components/pages/login/LoginForm'
import React from 'react'
import ToggleThemeButton from './../../components/atoms/toggleThemeButton';

const page = () => {
  return (
    <div className='dark:bg-primary-dark'>
      <ToggleThemeButton display={"hidden"}/>
      <LoginForm />
    </div>
  )
}

export default page
