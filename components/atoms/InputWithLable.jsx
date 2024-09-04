import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputWithLabel({lable, placeholder, type, id, register, errors}) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 my-2">
      <Label className="text-sm text-slate-700 ">{lable}</Label>
      <Input type={type} id={id} placeholder={placeholder} {...register(id)}/>
      {errors[id] && <p className="text-xs text-red-500" >{errors[id].message}</p>}
    </div>
  )
}
