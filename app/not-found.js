import Link from 'next/link'
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
 
export default function NotFound() {
  return (
    <div className="bg-white flex justify-center items-center text-white h-dvh gap-5" div="ltr">
      <div className='flex flex-col justify-center items-center text-primary'>
      <span>404</span>
      <h2>Not Found</h2>
      </div>
      <Separator orientation="vertical" className="bg-primary h-20"/>
      <div className='flex flex-col justify-center items-start text-black'>
        <p>Could not find requested resource</p>
        <Button variant="default" className="rounded-full" > <Link href="/">Return Home</Link> </Button> 
      </div>
    </div>
  )
}