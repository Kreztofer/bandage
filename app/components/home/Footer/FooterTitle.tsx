'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Container } from '../..';
import { SOCIALS } from '@/app/constants';

interface FooterTitleProp {
  color?: boolean;
}

const FooterTitle: React.FC<FooterTitleProp> = ({ color }) => {
  return (
    <Box
      className={`${color ? 'bg-white' : 'bg-[#FAFAFA] '}h-[142px] w-[100%]`}
    >
      <Container>
        <Box className="lg:border-b lg:border-b-[#E6E6E6] w-full h-[142px] flex flex-col lg:flex-row lg:justify-between lg:items-center justify-center gap-4">
          <Typography
            sx={{
              fontSize: '24px',
              lineHeight: '32px',
              fontWeight: '700',
              color: '#252B42',
            }}
            component="h3"
          >
            Bandage
          </Typography>
          <Box sx={{ display: 'flex', gap: '14px' }}>
            {SOCIALS.map((item, index) => (
              <Image
                key={index}
                src={item.img}
                alt={item.title}
                width={300}
                height={200}
                className="h-[20px] w-[22px] cursor-pointer"
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterTitle;
