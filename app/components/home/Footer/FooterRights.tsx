'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '../..';
const FooterRights = () => {
  return (
    <Box sx={{ backgroundColor: '#FAFAFA', height: '74px', width: '100%' }}>
      <Container>
        <Box className="w-full h-[74px] flex items-center text-center lg:text-start justify-center lg:justify-start">
          <Typography
            className="w-[60%] md:w-[100%]"
            sx={{
              fontSize: '14px',
              lineHeight: '24px',
              fontWeight: '700',
              color: '#737373',
            }}
            component="h6"
          >
            Made With Love By Finland All Right Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterRights;
