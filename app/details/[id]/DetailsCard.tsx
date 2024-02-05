'use client';

import { useEffect } from 'react';
import { IParams } from './page';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { PRODUCT_DETAIL } from '../../redux/slice/productSlice';
import { AppDispatch } from '../../redux/store';
import Box from '@mui/material/Box';
import DetailsHero from './DetailsHero';
import { Container, FooterTitle } from '@/app/components';
import DetailsDescription from './DetailsDescription';
import BestProducts from './BestProducts';

interface DetailsParams {
  params: IParams;
}

const DetailsCard: React.FC<DetailsParams> = ({ params }) => {
  const { id } = params;
  const dispatch = useDispatch<AppDispatch>();
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(`${url}/${id}`);
        dispatch(
          PRODUCT_DETAIL({
            products: data.data,
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id, dispatch, url]);

  return (
    <Box>
      <DetailsHero />
      <Container>
        <DetailsDescription />
      </Container>
      <BestProducts />
      <FooterTitle color={true} />
    </Box>
  );
};

export default DetailsCard;
