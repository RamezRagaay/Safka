import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const LeftPanel = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-primary text-white flex-1">
      <h2 className="text-[40px] font-bold mb-4">هل أنت مورد جديد ؟</h2>
        <Button variant="secondary" asChild>
          <Link href="/mowrd/signup"> 
              اشترك كمورد الان
          </Link>
        </Button>
    </div>
  );
};

export default LeftPanel;