'use client';

import { AppDispatch, useAppSelector } from '@/app/redux/store';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { Container } from '@/app/components';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { PRODUCT } from '@/app/models';
import { ADD_TO_CART, ADD_TO_WISHLIST } from '@/app/redux/slice/productSlice';
import { SlArrowRight } from 'react-icons/sl';

const DetailsHero = () => {
  const productsArray = useAppSelector((state) => state.rootReducer.product);
  const { productDetail } = productsArray;

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleAddToCart = (item: PRODUCT) => {
    dispatch(ADD_TO_CART(item));
    toast.success(`${item.title} added to cart successfully`, {
      style: { maxWidth: 800 },
    });
  };

  const handleAddToWishList = (item: PRODUCT) => {
    dispatch(ADD_TO_WISHLIST(item));
    toast.success(`${item.title} added to wishlist successfully`, {
      style: { maxWidth: 800 },
    });
  };

  const [imageUrl, setimageUrl] = useState(productDetail?.thumbnail);

  useEffect(() => {
    setimageUrl(productDetail?.thumbnail);
  }, [productDetail]);

  const handleSelectImage = (item: any) => {
    setimageUrl(item);
  };

  return (
    <Box sx={{ backgroundColor: '#FAFAFA' }}>
      <Container>
        <Box className="my-[52px]">
          <Typography className="flex items-center  gap-2">
            <span
              onClick={() => router.push('/')}
              className="font-semibold cursor-pointer text-[14px]"
            >
              Home
            </span>
            <SlArrowRight color="#BDBDBD" />{' '}
            <span className="text-[#BDBDBD] text-[14px] font-semibold">
              Shop
            </span>
          </Typography>
          {productDetail && (
            <>
              <Box className="flex flex-col mt-6 lg:flex-row w-full justify-between">
                <Box className="lg:w-[50%] w-full">
                  {imageUrl && (
                    <Image
                      src={imageUrl || productDetail.thumbnail}
                      alt={productDetail.title}
                      width={500}
                      height={500}
                      className="h-[450px] hover:scale-[1.02] duration-300"
                    />
                  )}
                  <Box className="gap-4 mt-4 lg:hidden flex overflow-y-hidden py-4 overflow-x-auto max-w-[500px]">
                    {productDetail.images.map((item, index) => (
                      <Image
                        onClick={() => handleSelectImage(item)}
                        alt="profiles"
                        width={300}
                        height={300}
                        key={index}
                        src={item}
                        className="h-[75px] w-[75px] cursor-pointer hover:scale-[1.03] duration-300"
                      />
                    ))}
                  </Box>
                </Box>
                <Box className="w-full lg:w-[50%] flex flex-col justify-between gap-6 lg:gap-0">
                  <Box
                    sx={{
                      width: '100%',
                      marginTop: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#252B42',
                        fontSize: '20px',
                        fontWeight: '400',
                        lineHeight: '30px',
                      }}
                    >
                      {productDetail.title}
                    </Typography>
                    <div>
                      {productDetail.rating > 3 && productDetail.rating < 4 ? (
                        <Image
                          alt="star"
                          src="/images/3hstars.png"
                          height={16}
                          width={80}
                          className="h-[16px] w-[86px]"
                        />
                      ) : productDetail.rating === 4 ? (
                        <Image
                          alt="star"
                          src="/images/4stars.png"
                          height={16}
                          width={80}
                          className="h-[16px] w-[86px]"
                        />
                      ) : productDetail.rating > 4 &&
                        productDetail.rating < 5 ? (
                        <Image
                          alt="star"
                          src="/images/4hstars.png"
                          height={16}
                          width={80}
                          className="h-[16px] w-[86px]"
                        />
                      ) : productDetail.rating === 3 ? (
                        <Image
                          alt="star"
                          src="/images/3stars.png"
                          height={16}
                          width={80}
                          className="h-[16px] w-[86px]"
                        />
                      ) : productDetail.rating === 5 ? (
                        <Image
                          alt="star"
                          src="/images/5stars.png"
                          height={16}
                          width={80}
                          className="h-[16px] w-[86px]"
                        />
                      ) : null}
                    </div>

                    <Typography
                      sx={{
                        color: '#F3CD03',
                        fontSize: '14px',
                        fontWeight: '600',
                        lineHeight: '24px',
                      }}
                    >
                      {productDetail.rating}
                      <span
                        style={{
                          color: '#737373',
                          marginLeft: '10px',
                          fontWeight: '500',
                        }}
                      >
                        10 Reviews
                      </span>
                    </Typography>
                    <Typography
                      className="mt-3 lg:mt-0"
                      sx={{
                        color: '#252B42',
                        fontSize: '24px',
                        fontWeight: '700',
                        lineHeight: '32px',
                      }}
                    >
                      ${productDetail.price}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#737373',
                        fontSize: '14px',
                        fontWeight: '700',
                        lineHeight: '24px',
                      }}
                    >
                      Availability :
                      <span style={{ color: '#23A6F0' }}> In Stock</span>
                    </Typography>
                    <Typography
                      sx={{
                        color: '#858585',
                        fontSize: '14px',
                        fontWeight: '400',
                        lineHeight: '24px',
                      }}
                    >
                      {productDetail.description}
                    </Typography>
                    <hr className="mt-3" />
                  </Box>
                  <Box>
                    <Box className="flex items-center gap-2">
                      <Box className="w-[30px] h-[30px] rounded-full bg-[#23A6F0]" />
                      <Box className="w-[30px] h-[30px] rounded-full bg-[#2DC071]" />
                      <Box className="w-[30px] h-[30px] rounded-full bg-[#E77C40]" />
                      <Box className="w-[30px] h-[30px] rounded-full bg-[#252B42]" />
                    </Box>
                  </Box>
                  <Box className="flex items-center gap-3">
                    <Box className="bg-[#23A6F0] flex items-center text-center w-[144px] h-[35px] rounded-[5px] border border-[#23A6F0] hover:bg-transparent duration-300 hover:text-[#23A6F0] cursor-pointer text-white justify-center text-[14px]">
                      Select Options
                    </Box>
                    <Box className="flex items-center gap-3">
                      <Image
                        onClick={() => handleAddToWishList(productDetail)}
                        src="/images/like.png"
                        alt="like"
                        width={300}
                        height={300}
                        className="h-[35px] w-[35px] hover:scale-[1.03] cursor-pointer duration-100"
                        title="Add to wishlist"
                      />
                      <Image
                        onClick={() => handleAddToCart(productDetail)}
                        src="/images/basket.png"
                        alt="basket"
                        width={300}
                        height={300}
                        className="h-[35px] w-[35px] hover:scale-[1.03] cursor-pointer duration-100"
                        title="Add to cart"
                      />
                      <Image
                        src="/images/more.png"
                        alt="more"
                        width={300}
                        height={300}
                        className="h-[35px] w-[35px] hover:scale-[1.03] duration-100 cursor-pointer"
                        title="Learn more"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="gap-4 mt-4 hidden lg:flex overflow-y-hidden py-4 overflow-x-auto max-w-[500px]">
                {productDetail.images.map((item, index) => (
                  <Image
                    onClick={() => handleSelectImage(item)}
                    onMouseOver={() => handleSelectImage(item)}
                    alt="profiles"
                    width={300}
                    height={300}
                    key={index}
                    src={item}
                    className="h-[75px] w-[75px] cursor-pointer hover:scale-[1.03] duration-300"
                  />
                ))}
              </Box>
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default DetailsHero;
