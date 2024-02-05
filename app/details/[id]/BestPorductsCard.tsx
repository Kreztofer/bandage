'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { BESTPRODUCT } from '@/app/constants';
const BestPorductsCard = () => {
  return (
    <Box className="hidden lg:block">
      <Box className="flex items-center gap-5 border-b py-5 mb-5">
        <Typography
          sx={{
            fontSize: '24px',
            lineHeight: '32px',
            fontWeight: '700',
            color: '#252B42',
          }}
          component="p"
        >
          BESTSELLER PRODUCTS
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {BESTPRODUCT.map((item, index) => (
          <Grid
            className="cursor-pointer duration-300 hover:scale-[1.02]"
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
          >
            <Paper
              style={{
                padding: '16px',
                textAlign: 'center',
                boxShadow: 'none',
              }}
            >
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={300}
                height={200}
                style={{ objectFit: 'cover' }}
                className="h-[268px]"
              />
              <Box
                sx={{
                  marginTop: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '9px',
                }}
              >
                <Typography
                  sx={{
                    color: '#252B42',
                    fontSize: '16px',
                    fontWeight: '700',
                    lineHeight: '24px',
                  }}
                >
                  {item.brand}
                </Typography>
                <Typography
                  sx={{
                    color: '#737373',
                    fontSize: '14px',
                    fontWeight: '700',
                    lineHeight: '24px',
                  }}
                >
                  {item.title}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      color: '#BDBDBD',
                      fontSize: '14px',
                      fontWeight: '700',
                      lineHeight: '24px',
                    }}
                  >
                    ${item.discountPercentage}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#23856D',
                      fontSize: '14px',
                      fontWeight: '700',
                      lineHeight: '24px',
                    }}
                  >
                    ${item.price}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BestPorductsCard;
