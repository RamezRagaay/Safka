import React from 'react'
import Cookies from 'js-cookie';
const Greeting = () => {
    const name = Cookies.get("provider-name");
  return (
    <div className="font-medium text-2xl text-primary" dir="rtl"> مرحبا {name}</div>
  )
}

export default Greeting