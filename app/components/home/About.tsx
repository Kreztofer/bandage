'use client';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { ABOUT } from '@/app/constants';

const About = () => {
  return (
    <Box className="flex md:flex-row flex-col justify-between w-full">
      <Box className="flex items-center flex-col text-center gap-[14px] w-[100%] md:w-[50%] mt-5">
        <Typography
          sx={{
            fontSize: '24px',
            lineHeight: '32px',
            fontWeight: '700',
            color: '#252B42',
          }}
          component="h3"
        >
          What they say about us
        </Typography>
        <Image
          src="/images/miles.png"
          alt="profile"
          width={300}
          height={600}
          className="h-[90x] w-[90px]"
          style={{ objectFit: 'cover' }}
        />
        <Image
          src="/images/stars.png"
          alt="stars"
          width={300}
          height={600}
          className="h-[22px] w-[120px]"
        />
        <Typography
          sx={{
            fontSize: '14px',
            lineHeight: '24px',
            fontWeight: '700',
            color: '#737373',
          }}
          component="h6"
        >
          Slate helps you see how many more days you need to work to <br />{' '}
          reach your financial goal.
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            lineHeight: '24px',
            fontWeight: '700',
            color: '#23A6F0',
          }}
          component="h3"
        >
          Regina Miles
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
          Designer
        </Typography>
      </Box>
      <Box className="w-[100%] lg:w-[40%] mt-10 md:mt-0 lg:mr-[60px]">
        <Grid container spacing={1}>
          {ABOUT.map((item, index) => (
            <Grid
              className="cursor-pointer duration-300 hover:scale-[1.03]"
              item
              xs={4}
              sm={4}
              md={4}
              key={index}
            >
              <Paper
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'none',
                }}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={300}
                  height={600}
                  style={{ objectFit: 'cover' }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
