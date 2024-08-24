import ToggleThemeButton from '@/components/atoms/toggleThemeButton'
import SignUpForm from '@/components/pages/signup/SignUpForm'
import React from 'react'

const page = () => {
  return (
    <div>
      <ToggleThemeButton display={"hidden"}/>
      <SignUpForm />
    </div>
  )
}

export default page
