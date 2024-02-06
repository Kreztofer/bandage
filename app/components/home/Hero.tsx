'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Hero = () => {
  return (
    <Box className="mt-[50px] flex lg:flex-row flex-col w-[100%] justify-between">
      <Box
        className="hover:scale-[1.02] duration-300 w-[100%] lg:w-[500px] h-[350px] lg:h-[616px] mb-[15px] lg:mb-0"
        sx={{
          backgroundImage: 'url(/images/furniture-img.png)',
          backgroundSize: 'cover',
        }}
      >
        <Box sx={{ marginLeft: '20px', marginTop: '20px' }}>
          <Typography
            sx={{
              fontSize: '14px',
              lineHeight: '24px',
              fontWeight: '700',
              color: '#2DC071',
            }}
            component="h6"
          >
            5 Items
          </Typography>
          <Typography
            sx={{
              fontSize: '40px',
              lineHeight: '50px',
              fontWeight: '700',
              color: '#252B42',
            }}
            component="h2"
          >
            FURNITURE
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              lineHeight: '24px',
              fontWeight: '700',
              color: '#252B42',
            }}
            component="h5"
          >
            Read More
          </Typography>
        </Box>
      </Box>
      <Box className="flex-col">
        <Box
          className="hover:scale-[1.02] duration-300 w-[100%] lg:w-[699px] lg:h-[300px] pt-[20px] pl-[20px] h-[350px]"
          sx={{
            backgroundImage: 'url(/images/furniture-img2.png)',
            backgroundSize: 'cover',
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: '14px',
                lineHeight: '24px',
                fontWeight: '700',
                color: '#2DC071',
              }}
              component="h6"
            >
              5 Items
            </Typography>
            <Typography
              sx={{
                fontSize: '24px',
                lineHeight: '32px',
                fontWeight: '700',
                color: '#252B42',
              }}
              component="h3"
            >
              FURNITURE
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                lineHeight: '24px',
                fontWeight: '700',
                color: '#252B42',
              }}
              component="h6"
            >
              Read More
            </Typography>
          </Box>
        </Box>
        <Box
          className="flex flex-col lg:flex-row"
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            marginTop: '15px',
          }}
        >
          <Box
            className="hover:scale-[1.02] duration-300 w-[100%] lg:w-[342px] lg:h-[300px] pt-[20px] pl-[20px] h-[350px]"
            sx={{
              backgroundImage: 'url(/images/furniture-img3.png)',
              backgroundSize: 'cover',
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: '14px',
                  lineHeight: '24px',
                  fontWeight: '700',
                  color: '#2DC071',
                }}
                component="h6"
              >
                5 Items
              </Typography>
              <Typography
                sx={{
                  fontSize: '24px',
                  lineHeight: '32px',
                  fontWeight: '700',
                  color: '#252B42',
                }}
                component="h3"
              >
                FURNITURE
              </Typography>
              <Typography
                sx={{
                  fontSize: '14px',
                  lineHeight: '24px',
                  fontWeight: '700',
                  color: '#252B42',
                }}
                component="h6"
              >
                Read More
              </Typography>
            </Box>
          </Box>
          <Box
            className="hover:scale-[1.02] duration-300 w-[100%] lg:w-[342px] lg:h-[300px] pt-[20px] pl-[20px] h-[350px] mt-[15px] lg:mt-0"
            sx={{
              backgroundImage: 'url(/images/furniture-img4.png)',
              backgroundSize: 'cover',
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: '14px',
                  lineHeight: '24px',
                  fontWeight: '700',
                  color: '#2DC071',
                }}
                component="h6"
              >
                5 Items
              </Typography>
              <Typography
                sx={{
                  fontSize: '24px',
                  lineHeight: '32px',
                  fontWeight: '700',
                  color: '#252B42',
                }}
                component="h3"
              >
                FURNITURE
              </Typography>
              <Typography
                sx={{
                  fontSize: '14px',
                  lineHeight: '24px',
                  fontWeight: '700',
                  color: '#252B42',
                }}
                component="h6"
              >
                Read More
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
