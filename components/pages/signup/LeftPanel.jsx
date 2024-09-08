import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const LeftPanel = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-primary text-white flex-1 p-4 md:p-10 text-center">
      <h2 className="text-2xl md:text-[40px] font-bold mb-4">هل لديك حساب ؟</h2>
        <Button variant="secondary" asChild>
          <Link href="/login"> 
              تسجيل دخول
          </Link>
        </Button>
    </div>
  );
};

export default LeftPanel;