'use client';

import Partners from './Partners';
import Box from '@mui/material/Box';
import BestPorductsCard from './BestPorductsCard';
const BestProducts = () => {
  return (
    <Box sx={{ backgroundColor: '#FAFAFA' }}>
      <Box className="w-[80%] flex flex-col mx-auto">
        <BestPorductsCard />
        <Partners />
      </Box>
    </Box>
  );
};

export default BestProducts;
