"use client"
import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { PlusIcon } from "lucide-react"
// import { useForm } from 'react-hook-form';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Cookies from 'js-cookie';
import { createProduct } from "@/services/products";

// Define validation schema with yup
const schema = yup.object().shape({
  name: yup.string().required("اسم المنتج مطلوب"),
  price: yup.number().required("السعر مطلوب").positive("يجب أن يكون السعر قيمة موجبة"),
  unit: yup.string().required("وحده القياس مطلوبة"),
  quantity: yup.number().required("الكمية مطلوبة").positive("يجب أن تكون الكمية قيمة موجبة").integer("يجب أن تكون الكمية عدد صحيح"),
  category: yup.string().required("التصنيف مطلوب"),
  description: yup.string().required("وصف المنتج مطلوب"),
  image: yup.mixed().required("صورة المنتج مطلوب"),
});

export function SheetDemo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);
  
  // Form submit handler
  const onSubmit = async (data) => {
    const seller_id = Cookies.get("seller-id");
    const dto = {
      "product_name" : data.name,
      "price" : data.price,
      "unit" : data.unit,
      "quantaty" : data.quantity,
      "description" : data.description,
      "product_images" : data.image,
      "seller_id" : seller_id,
      "category" : data.category

    }
    
    console.log("dto: ", dto);
    try {
      await createProduct(dto);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
    // await createProduct(dto);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='absolute left-10 mt-5 flex items-center h-12 gap-2 p-4 rounded-xl bg-slate-200 text-slate-700 hover:bg-slate-300 transition-all duration-300'>
            <PlusIcon className='w-8 h-8 rounded-full bg-primary text-slate-100'/>
            <span className='text-2xl font-semibold user-select-none max-md:hidden'>
                إضافة منتج
            </span>
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-[40%]">
        <SheetHeader>
          <SheetTitle className="text-right">اضف منتج جديد</SheetTitle>
          <SheetDescription className="text-right">
            اضف المنتج الذي تريده
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">اسم المنتج</Label>
              <Input id="name" {...register('name')} />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">السعر</Label>
              <Input id="price" type="number" {...register('price')} />
              {errors.price && <p className="text-red-500">{errors.price.message}</p>}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="unit" className="text-right">وحده القياس</Label>
              <Input id="unit" {...register('unit')} />
              {errors.unit && <p className="text-red-500">{errors.unit.message}</p>}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantity" className="text-right">الكمية</Label>
              <Input id="quantity" type="number" {...register('quantity')} />
              {errors.quantity && <p className="text-red-500">{errors.quantity.message}</p>}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">تصنيف المنتج</Label>
              <textarea id="category" {...register('category')} className="col-span-3 border-[1.5px] rounded-lg min-h-[70px] max-h-[350px]" />
              {errors.category && <p className="text-red-500">{errors.category.message}</p>}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">وصف المنتج</Label>
              <textarea id="description" {...register('description')} className="col-span-3 border-[1.5px] rounded-lg min-h-[70px] max-h-[350px]" />
              {errors.description && <p className="text-red-500">{errors.description.message}</p>}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">صور المنتج</Label>
              <Input type="file" id="image" {...register('image')} multiple/>
              {errors.image && <p className="text-red-500">{errors.image.message}</p>}
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit" onClick={(e) => 
                {
                  if(errors.category || errors.description || errors.image || errors.name || errors.price || errors.quantity || errors.unit){
                    e.preventDefault();
                  }
                }
              }>اضف المنتج</Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
