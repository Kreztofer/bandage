'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.push('/');
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex items-center justify-center w-full">
      <Image
        src="/images/celebration.gif"
        alt="celebration"
        width={1000}
        height={1000}
        className="w-[600px] h-[650px]"
      />
    </div>
  );
};

export default page;
