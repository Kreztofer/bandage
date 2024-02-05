'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Advertisement = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(/images/advertisement.png)',
        backgroundSize: 'cover',
        width: '100%',
        height: '640px',
        marginTop: '120px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '30px',
          height: '100%',
          textAlign: 'center',
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
          Designing Better Experience
        </Typography>
        <Typography
          className="lg:w-[35%] w-[80%]"
          sx={{
            fontSize: '40px',
            lineHeight: '50px',
            fontWeight: '700',
            color: '#252B42',
          }}
          component="h2"
        >
          Problems trying to resolve the conflict between
        </Typography>
        <Typography
          className="lg:w-[26%] w-[80%] "
          sx={{
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '400',
            color: '#737373',
          }}
          component="h2"
        >
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </Typography>
        <Typography
          sx={{
            fontSize: '24px',
            lineHeight: '32px',
            fontWeight: '700',
            color: '#23856D',
          }}
          component="h3"
        >
          $16.48
        </Typography>
        <Box
          className="cursor-pointer duration-300 hover:bg-transparent hover:text-[#23A6F0] "
          sx={{
            backgroundColor: '#23A6F0',
            border: '1px solid #23A6F0',
            color: '#fff',
            width: '261px',
            paddingY: '15px',
          }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: '700',
            }}
          >
            ADD YOUR CALL TO ACTION
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Advertisement;
