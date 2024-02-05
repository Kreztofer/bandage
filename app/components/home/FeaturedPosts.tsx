'use client';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { POSTS } from '@/app/constants';
const FeaturedPosts = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '30px',
        marginTop: '70px',
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
            fontSize: '14px',
            lineHeight: '24px',
            fontWeight: '700',
            color: '#23A6F0',
          }}
          component="h6"
        >
          Practice Advice
        </Typography>
        <Typography
          sx={{
            fontSize: '40px',
            lineHeight: '32px',
            fontWeight: '700',
            color: '#252B42',
          }}
          component="h2"
        >
          Featured Posts
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {POSTS.map((item, index) => (
          <Grid
            className="cursor-pointer duration-300 flex justify-center items-center  hover:scale-[1.02]"
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
          >
            <Paper
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                marginTop: '22px',
                paddingBottom: '10px',
                position: 'relative',
              }}
            >
              <Image
                src={item.img}
                alt={item.title}
                width={300}
                height={600}
                className="h-[368px] w-[100%]"
                style={{ objectFit: 'cover' }}
              />
              <span className="absolute top-4 left-4 bg-[#E74040] font-bold text-white px-[8px] text-[12px] rounded-[3px] py-1">
                New
              </span>
              <Box
                sx={{
                  paddingX: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Typography
                    sx={{
                      color: '#8EC2F2',
                      fontSize: '12px',
                      fontWeight: '400',
                      lineHeight: '16px',
                    }}
                  >
                    Google
                  </Typography>
                  <Typography
                    sx={{
                      color: '#737373',
                      fontSize: '12px',
                      fontWeight: '400',
                      lineHeight: '16px',
                    }}
                  >
                    Trending
                  </Typography>
                  <Typography
                    sx={{
                      color: '#737373',
                      fontSize: '12px',
                      fontWeight: '400',
                      lineHeight: '16px',
                    }}
                  >
                    New
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: '#252B42',
                    fontSize: '20px',
                    fontWeight: '400',
                    lineHeight: '30px',
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    color: '#737373',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '20px',
                  }}
                >
                  {item.desc}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <Image
                      src="/images/clock.png"
                      alt={item.title}
                      width={300}
                      height={600}
                      className="h-[16px] w-[16px]"
                    />
                    <Typography
                      sx={{
                        color: '#737373',
                        fontSize: '12px',
                        fontWeight: '400',
                        lineHeight: '20px',
                      }}
                    >
                      22 April 2021
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <Image
                      src="/images/comments.png"
                      alt={item.title}
                      width={300}
                      height={600}
                      className="h-[16px] w-[16px]"
                    />
                    <Typography
                      sx={{
                        color: '#737373',
                        fontSize: '12px',
                        fontWeight: '400',
                        lineHeight: '20px',
                      }}
                    >
                      10 comments
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                  <Typography
                    sx={{
                      color: '#737373',
                      fontSize: '14px',
                      fontWeight: '700',
                      lineHeight: '20px',
                    }}
                  >
                    Learn More
                  </Typography>
                  <Image
                    src="/images/next.png"
                    alt={item.title}
                    width={300}
                    height={600}
                    className="h-[14px] w-[14px]"
                  />
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedPosts;
