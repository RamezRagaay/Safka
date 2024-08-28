import React from 'react'
import { DropdownMenuRadioGroupDemo } from './dropDown'
import { IoSearchOutline } from "react-icons/io5";
import { Button } from '../ui/button';

// TODO : Take input from user and choice from dropdown.

const SearchWithDropDown = () => {
  return (
    <div className='flex items-center justify-between bg-white rounded w-[600px] py-1'>
      <DropdownMenuRadioGroupDemo
      values={
        ["الكل", "الكترونيات","المنتجات","الخدمات","أجهزة و معدات","مواد غذائية",
          "ملابس اطفال" , "ملابس رجال" , "ملابس سيدات" , "العاب" , "ادوات رياضية"]
      } />
      <form className='w-full flex justify-between items-center'>
        <input className='outline-none text-right w-full flex-shrink'
        placeholder='ابحث هنا'/>
        <Button type="submit" size="sm" className="mx-3"> <IoSearchOutline size={20} /></Button>
      </form>
    </div>
  )
}

export default SearchWithDropDown