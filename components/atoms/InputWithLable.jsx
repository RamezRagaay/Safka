import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputWithLabel({lable, placeholder, type}) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 my-2">
      <Label className="text-sm text-slate-700 ">{lable}</Label>
      <Input type={type} id={type} placeholder={placeholder} />
    </div>
  )
}
