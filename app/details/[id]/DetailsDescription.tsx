'use client';
import { useAppSelector } from '@/app/redux/store';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
const DetailsDescription = () => {
  const productsArray = useAppSelector((state) => state.rootReducer.product);
  const { productDetail } = productsArray;
  return (
    <Box className="hidden lg:block">
      <Box className="flex items-center gap-5 border-b py-6 justify-center">
        <Typography
          sx={{
            fontSize: '14px',
            lineHeight: '30px',
            fontWeight: '600',
            color: '#737373',
          }}
          component="p"
        >
          Description
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            lineHeight: '30px',
            fontWeight: '600',
            color: '#737373',
          }}
          component="p"
        >
          Additional Information
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            lineHeight: '30px',
            fontWeight: '600',
            color: '#737373',
          }}
          component="p"
        >
          Reviews <span className="text-[#23856D]">(0)</span>
        </Typography>
      </Box>
      <Box className="flex justify-between my-9">
        <Box className="flex flex-col gap-9">
          <Typography
            sx={{
              color: '#252B42',
              fontSize: '24px',
              fontWeight: '400',
              lineHeight: '32px',
            }}
          >
            The quick fox jumps over
          </Typography>
          <Box className="flex flex-col gap-6">
            <Typography
              sx={{
                color: '#737373',
                fontSize: '15px',
                fontWeight: '400',
                lineHeight: '20px',
                width: '80%',
              }}
            >
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </Typography>
            <Typography
              sx={{
                color: '#737373',
                fontSize: '15px',
                fontWeight: '400',
                lineHeight: '20px',
                width: '80%',
                borderLeft: '3px solid #23856D ',
                paddingLeft: '16px',
              }}
            >
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </Typography>
            <Typography
              sx={{
                color: '#737373',
                fontSize: '15px',
                fontWeight: '400',
                lineHeight: '20px',
                width: '80%',
              }}
            >
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </Typography>
          </Box>
        </Box>
        <Image
          src="/images/description.png"
          alt="description-img"
          width={500}
          height={500}
          className="h-[450px]"
        />
      </Box>
    </Box>
  );
};

export default DetailsDescription;
