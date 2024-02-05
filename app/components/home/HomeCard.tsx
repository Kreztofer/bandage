'use client';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { STORE_PRODUCTS } from '../../redux/slice/productSlice';
import { AppDispatch } from '../../redux/store';
import {
  About,
  Advertisement,
  Container,
  FeaturedPosts,
  FeaturedProducts,
  FeaturedServices,
  FooterTitle,
  Hero,
} from '..';

const HomeCard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}`);
        dispatch(
          STORE_PRODUCTS({
            products: response.data.products,
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch, url]);

  return (
    <main>
      <Container>
        <Hero />
        <FeaturedProducts />
        <FeaturedServices />
        <FeaturedPosts />
        <About />
      </Container>
      <Advertisement />
      <FooterTitle />
    </main>
  );
};

export default HomeCard;
