'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useSearchParams } from 'next/navigation';

const SortB2BFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Get the current sort parameter from the URL
  const sort = searchParams.get('sort') || '';

  // Function to handle updating the search params
  const handleSortChange = (value) => {
    const current = new URLSearchParams(searchParams);
    if (value) {
      current.set('sort', value);
      current.delete('page');
    }
    else {
      current.delete('sort');
      current.delete('page');
    }
    // Navigate to the new URL with updated search params
    router.push(`?${current.toString()}`);
  };

  return (
    <div className='flex flex-col gap-4 p-5'>
      <p className='font-bold text-xl'>ترتيب النتائج</p>
      <RadioGroup value={sort} onValueChange={handleSortChange}>
        <div className="flex items-center space-x-2 gap-3" dir='rtl'>
          <RadioGroupItem value="" id="default" />
          <Label className='font-normal' htmlFor="default">افتراضي</Label>
        </div>
        <div className="flex items-center space-x-2 gap-3" dir='rtl'>
          <RadioGroupItem value="price_per_unit" id="price" />
          <Label className='font-normal' htmlFor="price">السعر : الاقل للاعلي</Label>
        </div>
        <div className="flex items-center space-x-2 gap-3" dir='rtl'>
          <RadioGroupItem value="-price_per_unit" id="-price" />
          <Label className='font-normal' htmlFor="-price">السعر : الاعلي للاقل</Label>
        </div>
        <div className="flex items-center space-x-2 gap-3" dir='rtl'>
          <RadioGroupItem value="-created" id="-create" />
          <Label className='font-normal' htmlFor="-create">التاريخ : الاحدث</Label>
        </div>
        <div className="flex items-center space-x-2 gap-3" dir='rtl'>
          <RadioGroupItem value="created" id="create" />
          <Label className='font-normal' htmlFor="create"> التاريخ : الأقدم </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default SortB2BFilter;
