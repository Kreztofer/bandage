'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { GridCard } from '..';
const FeaturedProducts = () => {
  return (
    <Box>
      <Box
        sx={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        <Typography
          sx={{
            fontSize: '18px',
            lineHeight: '30px',
            fontWeight: '600',
            color: '#737373',
          }}
          component="h1"
        >
          Featured Products
        </Typography>
        <Typography
          sx={{ fontSize: '22px', lineHeight: '32px', fontWeight: '700' }}
          component="h2"
        >
          BESTSELLER PRODUCTS
        </Typography>
        <Typography
          sx={{
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: '400',
            color: '#737373',
          }}
          component="p"
        >
          Problems trying to resolve the conflict between
        </Typography>
      </Box>
      <GridCard />
    </Box>
  );
};

export default FeaturedProducts;
