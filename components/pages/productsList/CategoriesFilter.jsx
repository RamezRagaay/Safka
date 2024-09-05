'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

const CategoriesFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // TODO : Handle reset page to 1.
  const handleCategoriesChange = (value) => {
    const current = new URLSearchParams(searchParams);
    if (value) {
      current.set('categories', value);
    } else {
      current.delete('categories');
    }
    // Navigate to the new URL with updated search params
    router.push(`?${current.toString()}`);
  };

  return (
    <div className='flex flex-col p-5 gap-4'>
      <p className='text-xl font-bold'>التصنيفات</p>
      <div className='flex flex-col justify-between items-start gap-1'>
        <p
          className={ ` ${ !searchParams.get('categories') ? 'text-primary' : ''}
          hover:text-primary duration-300 select-none cursor-pointer`}
          onClick={() => handleCategoriesChange('')}
        >
          الكل
        </p>
        <p
          className={ ` ${ searchParams.get('categories')==='electronics' ? 'text-primary' : ''}
          hover:text-primary duration-300 select-none cursor-pointer`}
          onClick={() => handleCategoriesChange('electronics')}
        >
          ألكترونيات
        </p>
        <p
          className={ ` ${ searchParams.get('categories')==='sports' ? 'text-primary' : ''}
          hover:text-primary duration-300 select-none cursor-pointer`}
          onClick={() => handleCategoriesChange('sports')}
        >
          ادوات رياضية
        </p>
        <p
          className={ ` ${ searchParams.get('categories')==='mens-clothing' ? 'text-primary' : ''}
          hover:text-primary duration-300 select-none cursor-pointer`}
          onClick={() => handleCategoriesChange('mens-clothing')}
        >
          ملابس رجالية
        </p>
        <p
          className={ ` ${ searchParams.get('categories')==='womens-clothing' ? 'text-primary' : ''}
          hover:text-primary duration-300 select-none cursor-pointer`}
          onClick={() => handleCategoriesChange('womens-clothing')}
        >
          ملابس نسائية
        </p>
        <p
          className={ ` ${ searchParams.get('categories')==='kids-clothing' ? 'text-primary' : ''}
          hover:text-primary duration-300 select-none cursor-pointer`}
          onClick={() => handleCategoriesChange('kids-clothing')}
        >
          ملابس اطفال
        </p>
        <p
          className={ ` ${ searchParams.get('categories')==='groceries' ? 'text-primary' : ''}
          hover:text-primary duration-300 select-none cursor-pointer`}
          onClick={() => handleCategoriesChange('groceries')}
        >
          مواد غذائية
        </p>
        <p
          className={ ` ${ searchParams.get('categories')==='supplies' ? 'text-primary' : ''}
          hover:text-primary duration-300 select-none cursor-pointer`}
          onClick={() => handleCategoriesChange('supplies')}
        >
          مستلزمات
        </p>
      </div>
    </div>
  )
}

export default CategoriesFilter;
