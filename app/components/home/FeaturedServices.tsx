'use client';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { SERVICES } from '@/app/constants';
import Image from 'next/image';
const FeaturedServices = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '30px',
      }}
    >
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
          THE BEST SERVICES
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
      <Grid container spacing={2}>
        {SERVICES.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              style={{
                padding: '16px',
                textAlign: 'center',
                boxShadow: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                marginTop: '22px',
              }}
            >
              <Image
                src={item.img}
                alt={item.title}
                width={300}
                height={200}
                className="h-[72px] w-[72px]"
              />
              <Typography
                sx={{
                  color: '#252B42',
                  fontSize: '16px',
                  fontWeight: '700',
                  lineHeight: '24px',
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  color: '#737373',
                  fontSize: '14px',
                  fontWeight: '700',
                  lineHeight: '24px',
                }}
              >
                {item.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedServices;
