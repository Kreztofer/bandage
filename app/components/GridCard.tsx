'use client';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useAppSelector } from '../redux/store';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

const GridCard = () => {
  const productsArray = useAppSelector(
    (state) => state.rootReducer.product.products
  );

  const initialLimit = 8;
  const increment = 8;

  const [displayLimit, setDisplayLimit] = useState<number>(initialLimit);

  const displayProducts = productsArray.slice(0, displayLimit);

  const handleLoadMore = () => {
    setDisplayLimit((prevLimit) => prevLimit + increment);
  };

  const router = useRouter();

  return (
    <Box
      sx={{
        marginTop: '30px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '100px',
      }}
    >
      <Grid container spacing={2}>
        {displayProducts.map((item, index) => (
          <Grid
            onClick={() => router.push(`/details/${item.id}`)}
            className="cursor-pointer flex justify-center items-center duration-300 hover:scale-[1.03]"
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
          >
            <Paper
              style={{
                padding: '16px',
                textAlign: 'center',
                boxShadow: 'none',
              }}
            >
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={300}
                height={200}
                style={{ objectFit: 'cover' }}
                className="h-[268px]"
              />
              <Box
                sx={{
                  marginTop: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '9px',
                }}
              >
                <Typography
                  sx={{
                    color: '#252B42',
                    fontSize: '16px',
                    fontWeight: '700',
                    lineHeight: '24px',
                  }}
                >
                  {item.brand}
                </Typography>
                <Typography
                  sx={{
                    color: '#737373',
                    fontSize: '14px',
                    fontWeight: '700',
                    lineHeight: '24px',
                  }}
                >
                  {item.title}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      color: '#BDBDBD',
                      fontSize: '14px',
                      fontWeight: '700',
                      lineHeight: '24px',
                    }}
                  >
                    ${item.discountPercentage}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#23856D',
                      fontSize: '14px',
                      fontWeight: '700',
                      lineHeight: '24px',
                    }}
                  >
                    ${item.price}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      {displayLimit < productsArray.length && (
        <Box
          onClick={() => handleLoadMore()}
          className="hover:bg-[#23A6F0] flex justify-center text-center duration-300 hover:text-white cursor-pointer"
          sx={{
            border: '1px solid #23A6F0',
            color: '#23A6F0',
            width: '261px',
            paddingY: '10px',
          }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: '700',
            }}
          >
            LOAD MORE PRODUCTS
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default GridCard;
