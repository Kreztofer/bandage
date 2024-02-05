'use client';

import { PARTNERS } from '@/app/constants';
import Box from '@mui/material/Box';
import Image from 'next/image';
const Partners = () => {
  return (
    <Box className="flex flex-col lg:flex-row justify-between gap-[40px] lg:gap-0 items-center my-[70px]">
      {PARTNERS.map((item, index) => (
        <Image
          key={index}
          src={item.image}
          alt="partners"
          width={300}
          height={200}
          className={`${
            index === PARTNERS.length - 1
              ? 'w-[90px] h-[80px]'
              : 'w-[90px] h-[52px]'
          }`}
        />
      ))}
    </Box>
  );
};

export default Partners;
