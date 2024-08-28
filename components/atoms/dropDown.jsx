"use client"

import * as React from "react"
import { GoChevronDown } from "react-icons/go";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuRadioGroupDemo({values}) {
  const [choice, setChoice] = React.useState(values[0])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="text-black bg-white flex items-center
        justify-between rounded px-4 py-2 focus:outline-none gap-2 shrink-0">
          {choice} <GoChevronDown className="ml-2 h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 max-h-60 overflow-auto">
        <DropdownMenuRadioGroup value={choice}  onValueChange={setChoice}>
          {
            values.map((value) => (
              <>
              <DropdownMenuRadioItem key={value} value={value} 
              className="bg-white text-black
              focus:bg-slate-100 focus:text-slate-900 
              relative flex cursor-pointer select-none items-center py-1.5 pl-8 pr-2 text-sm outline-none transition-colors
              ">
                {value}
              </DropdownMenuRadioItem>
              <hr />
              </>
            ))
          }
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


