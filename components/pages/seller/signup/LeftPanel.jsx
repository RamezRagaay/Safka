import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const LeftPanel = () => {
  return (
    <div className="flex md:flex-col md:p-0 p-5 gap-5 md:gap-0 justify-center items-center bg-primary text-white flex-1">
      <h2 className="md:text-[40px] text-[20px] font-bold mb-4">هل لديك حساب تاجر ؟</h2>
        <Button variant="secondary" asChild>
          <Link href="/seller/login"> 
              تسجيل دخول
          </Link>
        </Button>
    </div>
  );
};

export default LeftPanel;