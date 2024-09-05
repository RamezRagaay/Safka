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

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='absolute left-10 mt-5 flex items-center h-12 gap-2 p-4 rounded-xl bg-slate-200 text-slate-700 hover:bg-slate-300 transition-all duration-300'>
            <PlusIcon className='w-8 h-8 rounded-full bg-primary text-slate-100'/>
            <span className='text-2xl font-semibold user-select-none max-md:hidden'>
                إضافة منتج
            </span>
        </Button>
        {/* <Button variant="outline">Open</Button> */}
      </SheetTrigger>
      <SheetContent className=" sm:max-w-[40%]">
        <SheetHeader >
          <SheetTitle className="text-right">اضف منتج جديد</SheetTitle>
          <SheetDescription  className="text-right">
            اضف المنتج الذي تريده
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              اسم المنتج
            </Label>
            <Input id="name"  className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
            السعر   
            </Label>
            <Input id="username" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
            وحده القياس
            </Label>
            <Input id="username" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
            الكمية
            </Label>
            <Input id="username" className="col-span-3" />
          </div>
          
          <div  className="grid grid-cols-4 items-center gap-4 ">
            <Label htmlFor="username" className="text-right">
            وصف المنتج
            </Label>
            <textarea id="username"  className="col-span-3 border-[1.5px] rounded-lg min-h-[70px] max-h-[350px]"></textarea>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
            صور المنتج
            </Label>
            <Input type="file" id="username" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">اضف المنتج</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
