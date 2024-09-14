// import React from 'react'
// import CategoriesFilter from '@/components/pages/productsList/CategoriesFilter'
// import PriceFilter from '@/components/pages/productsList/PriceFilter'
// import SortB2BFilter from './SortB2Bfilter'

// const SideBar = () => {
// 	return (
// 		<div className='flex flex-col gap-2 border' >
// 			<SortB2BFilter/>
// 			<hr />
// 			<CategoriesFilter />
// 			<hr />
// 			<PriceFilter/>
// 		</div>
// 	)
// }

// export default SideBar

'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import CategoriesFilter from '../../productsList/CategoriesFilter'
import SortFilter from './SortB2Bfilter'
import PriceFilter from '../../productsList/PriceFilter'

export default function SideBar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" className="xl:hidden fixed bottom-4 right-4 z-50">
            <Menu className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px] xl:w-[40%] overflow-y-auto">
          <div className="py-4">
            <SidebarContent />
          </div>
        </SheetContent>
      </Sheet>
      <div className="hidden xl:block w-[250px] border rounded-lg">
        <SidebarContent />
      </div>
    </>
  )
}

function SidebarContent() {
  return (
    <div className='flex flex-col gap-6'>
      <SortFilter />
      <hr className="my-2" />
      <CategoriesFilter />
      <hr className="my-2" />
      <PriceFilter />
    </div>
  )
}