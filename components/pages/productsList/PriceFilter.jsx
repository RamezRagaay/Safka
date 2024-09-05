'use client';
import React, { useState } from 'react';
import * as Slider from '@radix-ui/react-slider';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const PriceFilter = () => {
  const searchParams = useSearchParams();
  const min = Number(searchParams.get('price>'));
  const max = Number(searchParams.get('price<'));
  const [priceRange, setPriceRange] = useState([min || 1, max || 10000]);

  const router = useRouter();
  
  const handleSubmit = () => {  
    const current = new URLSearchParams(searchParams.toString());
    current.set('price>', priceRange[0]);
    current.set('price<', priceRange[1]);
    router.push(`?${current.toString()}`);
  };

  const handleValueChange = (value) => {
    setPriceRange(value);
  };

  return (
    <div className="flex flex-col p-5 gap-4">
      <div className="mb-2 flex flex-col gap-2">
        <p className="text-xl font-bold">السعر</p>
        <p className="text-base font-semibold">من {priceRange[0]} ريال سعودي </p>
        <p className="text-base font-semibold">الي {priceRange[1]} ريال سعودي </p>
      </div>
      <Slider.Root
        className="relative flex items-center select-none touch-none w-[200px] h-5"
        value={priceRange}
        onValueChange={handleValueChange}
        min={1}
        max={10000}
        step={1}
      >
        <Slider.Track className="bg-slate-300 relative grow rounded-full h-[6px]">
          <Slider.Range className="absolute bg-primary rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb
          className="block w-4 h-4 bg-white shadow-[0_2px_10px] shadow-black rounded-[10px] focus:outline-none cursor-ew-resize"
          aria-label="Lower Price"
        />
        <Slider.Thumb
          className="block w-4 h-4 bg-white shadow-[0_2px_10px] shadow-black rounded-[10px] focus:outline-none cursor-ew-resize"
          aria-label="Upper Price"
        />
      </Slider.Root>
      <Button type="submit" onClick={handleSubmit}>تصفية بالسعر</Button>
    </div>
  );
};

export default PriceFilter;
