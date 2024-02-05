'use client';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

export default function Navbar() {
  return (
    <Box className="hidden lg:flex" sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#23856D',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          boxShadow: 'none',
        }}
      >
        <Box
          sx={{
            width: '95%',
            marginX: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
            height: '100%',
            alignItems: 'center',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Image
                src="/images/phone.png"
                alt="phone"
                height="100"
                width="100"
                style={{ width: '16px', height: '16px' }}
              />
              <Typography sx={{ fontSize: '14px' }} component="div">
                (225) 555-0118
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Image
                src="/images/email.png"
                alt="email"
                height="100"
                width="100"
                style={{ width: '100%', height: '12px' }}
              />
              <Typography sx={{ fontSize: '14px' }} component="div">
                michelle.rivera@example.com
              </Typography>
            </Box>
          </Box>
          <Typography sx={{ fontSize: '14px' }} component="div">
            Follow Us and get a chance to win 80% off
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Typography sx={{ fontSize: '14px' }} component="div">
              Follow Us :
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Image
                src="/images/instagram.png"
                alt="insatgram"
                height="100"
                width="100"
                style={{ width: '100%', height: '100%' }}
              />
              <Image
                src="/images/youtube.png"
                alt="youtube"
                height="100"
                width="100"
                style={{ width: '100%', height: '100%' }}
              />
              <Image
                src="/images/facebook.png"
                alt="facebook"
                height="100"
                width="100"
                style={{ width: '100%', height: '100%' }}
              />
              <Image
                src="/images/twitter.png"
                alt="twitter"
                height="100"
                width="100"
                style={{ width: '100%', height: '100%' }}
              />
            </Box>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}
