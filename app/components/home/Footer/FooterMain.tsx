'use client';

import { FOOTERLINKS } from '@/app/constants';
import Box from '@mui/material/Box';
import { Input } from '@mui/material';


import Typography from '@mui/material/Typography';
const FooterMain = () => {
  return (
    <Box
      sx={{
        marginY: '60px',
      }}
    >
      <Box className="flex justify-between w-full flex-col lg:flex-row gap-6 lg:gap-0">
        {FOOTERLINKS.map((item, index) => (
          <Box
            sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            key={index}
          >
            <Typography
              sx={{
                fontSize: '16px',
                lineHeight: '24px',
                fontWeight: '700',
                color: '#252B42',
              }}
              component="h5"
            >
              {item.title}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                marginTop: '15px',
              }}
            >
              {item.details.map((item, index) => (
                <Box key={index}>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      lineHeight: '24px',
                      fontWeight: '700',
                      color: '#737373',
                    }}
                    component="h5"
                  >
                    {item.detail}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
        <Box>
          <Typography
            sx={{
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: '700',
              color: '#252B42',
            }}
            component="h5"
          >
            Get In Touch
          </Typography>
          <Box className="flex items-center lg:w-[310px] mt-[14px] w-[90%]">
            <Box
              sx={{
                backgroundColor: '#F9F9F9',
                border: '1px solid #E6E6E6',
                width: '70%',
                height: '58px',
                display: 'flex',
                textAlign: 'center',
                alignItems: 'center',
                paddingX: '10px',
                fontSize: '12px',
              }}
            >
              <Input
                className="text-[12px]"
                placeholder="Your Email"
                disableUnderline
              />
            </Box>
            <Box
              className="cursor-pointer duration-300 hover:scale-[1.03] "
              sx={{
                backgroundColor: '#23A6F0',
                color: '#fff',
                height: '58px',
                width: '30%',
                display: 'flex',
                textAlign: 'center',
                alignItems: 'center',
                fontSize: '12px',
                fontWeight: '400',
                justifyContent: 'center',
              }}
            >
              Subscribe
            </Box>
          </Box>
          <Typography
            sx={{
              fontSize: '12px',
              lineHeight: '28px',
              fontWeight: '400',
              color: '#737373',
            }}
            component="p"
          >
            Lore imp sum dolor Amit
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterMain;
