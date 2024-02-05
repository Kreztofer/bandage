'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AppDispatch, useAppSelector } from '@/app/redux/store';
import { GrFormDown } from 'react-icons/gr';
import { FaRegUser } from 'react-icons/fa';
import Modal from '../../modals/Modal';
import { priceSummation } from '@/app/hooks/priceSummation';
import { FaCirclePlus, FaCircleMinus } from 'react-icons/fa6';
import { GoSearch } from 'react-icons/go';
import { IoIosHeartEmpty } from 'react-icons/io';
import { BsCart } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { BiMenuAltRight } from 'react-icons/bi';
import {
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_FROM_WISHLIST,
  ADD_TO_CART,
} from '@/app/redux/slice/productSlice';
import toast from 'react-hot-toast';
import { PRODUCT } from '@/app/models';

const TopNav = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [modal, setModal] = useState<boolean>(false);
  const [modal2, setModal2] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);

  const cartArray = useAppSelector((state) => state.rootReducer.product.cart);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculatedTotal = cartArray.reduce((accumulator, item) => {
      return accumulator + item.quantity * item.price;
    }, 0);
    setTotal(calculatedTotal);
  }, [cartArray]);

  const wishListArray = useAppSelector(
    (state) => state.rootReducer.product.wishlist
  );

  const handleIncreaseQty = (item: number) => {
    dispatch(INCREASE_QUANTITY(item));
  };

  const handleDecreaseQty = (item: number) => {
    dispatch(DECREASE_QUANTITY(item));
  };

  const handleRemoveItem = (item: number) => {
    dispatch(REMOVE_FROM_CART(item));
    toast.success(`Item removed from cart successfully`, {
      style: { maxWidth: 800 },
    });
  };

  const handleCheckOut = () => {
    setModal(false);
    document.body.style.overflowY = 'auto';
    dispatch(REMOVE_ALL_FROM_CART());
    router.push('/success');
  };

  const hanldeAddToCart = (item: PRODUCT) => {
    dispatch(ADD_TO_CART(item));
    dispatch(REMOVE_FROM_WISHLIST(item.id));
    toast.success(`Item added to cart successfully`, {
      style: { maxWidth: 800 },
    });
  };

  const handleRemoveFromWishlist = (id: number) => {
    dispatch(REMOVE_FROM_WISHLIST(id));
    toast.success(`Item removed from wishlist successfully`, {
      style: { maxWidth: 800 },
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isFixed = scrollTop > 50;
      setIsNavbarFixed(isFixed);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSetModal = (item: string) => {
    document.body.style.overflowY = 'hidden';
    if (item === 'cart') {
      setModal(true);
    } else if (item === 'wishlist') {
      setModal2(true);
    }
  };
  const body = (
    <div className="w-full">
      {cartArray.length > 0 ? (
        <div className="flex flex-col gap-5 mb-6">
          {cartArray.map((item, index) => (
            <div
              className="flex border py-3 px-6 border-gray-300 rounded-md justify-between items-center"
              key={index}
            >
              <div className="w-[20%]">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="rounded-md w-[100px] h-[80px]"
                />
              </div>
              <div className="flex justify-between items-center w-[50%]">
                <p className="font-semibold">{item.title}</p>
                <div className="flex gap-3 items-center">
                  <FaCirclePlus
                    onClick={() => handleIncreaseQty(item.id)}
                    size={24}
                    color="#23856D"
                    className="cursor-pointer hover:scale-[1.1] duration-300"
                  />
                  <p className="font-medium">{item.quantity}</p>
                  {item.quantity > 1 ? (
                    <FaCircleMinus
                      onClick={() => handleDecreaseQty(item.id)}
                      size={24}
                      color="red"
                      className="cursor-pointer hover:scale-[1.03] duration-300"
                    />
                  ) : (
                    <FaCircleMinus
                      size={24}
                      color="red"
                      className="opacity-30 hover:scale-[1.03] duration-300"
                    />
                  )}
                </div>
              </div>
              <div className="w-[20%] flex flex-col items-end">
                <FaTrash
                  onClick={() => handleRemoveItem(item.id)}
                  color="red"
                  size={18}
                  className="mb-2 cursor-pointer hover:scale-[1.03] duration-300"
                />
                <p className="text-sm">${item.price}</p>
                <p className="text-[#F3CD03] font-semibold">
                  ${priceSummation(item.price, item.quantity)}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center mb-6 justify-center w-full text-center">
          <p className="font-bold text-lg">No item in Cart</p>
        </div>
      )}
    </div>
  );
  const totalBody = (
    <>
      {cartArray.length > 0 && (
        <div className="flex flex-col mt-6 px-4 items-end justify-end gap-5 w-full">
          <div className="flex w-[30%] justify-between items-center gap-[100px]">
            <p className="font-semibold">Sub Total:</p>
            <p className="font-semibold text-[#F3CD03] ">${total}</p>
          </div>
          <button
            onClick={() => handleCheckOut()}
            className="bg-[#23A6F0] border border-[#23A6F0] hover:bg-transparent hover:text-[#23A6F0] duration-300 text-white w-[30%] py-2 rounded-lg text-center"
          >
            Checkout
          </button>
        </div>
      )}
    </>
  );
  const body2 = (
    <div>
      {wishListArray.length > 0 ? (
        <div className="flex flex-col gap-5 mb-6">
          {wishListArray.map((item, index) => (
            <div
              className="flex border py-3 px-6 border-gray-300 rounded-md justify-between items-center"
              key={index}
            >
              <div className="flex justify-between flex-col h-[130px]">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="rounded-md w-[100px] h-[80px]"
                />
                <div
                  onClick={() => hanldeAddToCart(item)}
                  className="h-[30px] rounded-md flex items-center justify-center cursor-pointer bg-[#23A6F0] text-white hover:bg-transparent hover:text-[#23A6F0] duration-300 border border-[#23A6F0]"
                >
                  <p className="text-[12px]">Add To Cart</p>
                </div>
              </div>
              <div className="flex flex-col h-[120px] justify-between">
                <div />
                <p className="font-semibold ml-auto">{item.title}</p>
                <div
                  onClick={() => handleRemoveFromWishlist(item.id)}
                  className="h-[30px] ml-auto px-2 rounded-md flex items-center justify-center cursor-pointer bg-red-600 text-white hover:bg-transparent hover:text-red-600 duration-300 border border-red-600"
                >
                  <p className="text-[12px]">Remove from wishlist</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center mb-6 justify-center w-full text-center">
          <p className="font-bold text-lg">No item in wishlist</p>
        </div>
      )}
    </div>
  );

  return (
    <Box>
      <Box
        className={`w-[100%] z-[50]  ${
          isNavbarFixed ? 'fixed top-0 shadow-md ' : ''
        }h-[62px] bg-white flex items-center`}
      >
        <Box className="w-[80%] lg:w-[95%] mx-auto flex justify-between h-[100%] items-center">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '40px',
            }}
          >
            <Typography
              onClick={() => router.push('/')}
              sx={{ fontSize: '24px', fontWeight: '700', cursor: 'pointer' }}
              component="div"
            >
              Bandage
            </Typography>
            <Box
              className="hidden lg:flex"
              sx={{ alignItems: 'center', gap: '20px' }}
            >
              <Typography
                onClick={() => router.push('/')}
                sx={{ fontSize: '14px', cursor: 'pointer' }}
                component="div"
              >
                Home
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Typography sx={{ fontSize: '14px' }} component="div">
                  Shop
                </Typography>
                <GrFormDown />
              </Box>
              <Typography sx={{ fontSize: '14px' }} component="div">
                About
              </Typography>
              <Typography sx={{ fontSize: '14px' }} component="div">
                Blog
              </Typography>
              <Typography sx={{ fontSize: '14px' }} component="div">
                Contact
              </Typography>
              <Typography sx={{ fontSize: '14px' }} component="div">
                Pages
              </Typography>
            </Box>
          </Box>
          <Box className="hidden lg:flex items-center gap-[26px]">
            <Box className="flex items-center text-center justify-center gap-[10px]">
              <FaRegUser color="#23A6F0" size={14} />
              <Typography
                sx={{
                  fontSize: '14px',
                  color: '#23A6F0',
                  fontWeight: '600',
                }}
                component="p"
              >
                Login / Register
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '30px',
                justifyContent: 'center',
              }}
            >
              <GoSearch size={19} color="#23A6F0" />
              <Box
                onClick={() => handleSetModal('cart')}
                className="relative cursor-pointer"
              >
                <BsCart size={18} color="#23A6F0" />
                <Typography className="absolute top-[-10px] text-[#23A6F0] text-[3px] left-5">
                  {cartArray.length}
                </Typography>
              </Box>
              <Box
                onClick={() => handleSetModal('wishlist')}
                className="relative cursor-pointer"
              >
                <IoIosHeartEmpty size={20} color="#23A6F0" />
                <Typography className="absolute top-[-10px] text-[#23A6F0] text-[3px] left-5">
                  {wishListArray.length}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className="flex lg:hidden gap-6 items-center">
            <GoSearch size={22} />
            <Image
              onClick={() => handleSetModal('cart')}
              className="hover:scale-[1.03] duration-200 cursor-pointer h-[16px] w-[20px]"
              src="/images/cartb.png"
              alt="menu"
              height="500"
              width="500"
            />
            <BiMenuAltRight
              size={24}
              className="cursor-pointer"
              onClick={() => setMenu((prev) => !prev)}
            />
          </Box>
        </Box>
        {menu && (
          <Box className="w-full lg:hidden top-[62px] fixed bg-white z-10 shadow-lg h-auto">
            <Box className="flex gap-4 flex-col h-full justify-between w-full items-center py-8">
              <Typography
                onClick={() => router.push('/')}
                className="text-[#737373] font-[400] text-[20px] cursor-pointer"
              >
                Home
              </Typography>
              <Typography className="text-[#737373] font-[400] text-[20px]">
                Shop
              </Typography>
              <Typography className="text-[#737373] font-[400] text-[20px]">
                About
              </Typography>
              <Typography className="text-[#737373] font-[400] text-[20px]">
                Blog
              </Typography>
              <Typography className="text-[#737373] font-[400] text-[20px]">
                Contact
              </Typography>
              <Typography className="text-[#737373] font-[400] text-[20px]">
                Pages
              </Typography>
              <Box className="flex flex-col gap-4">
                <Box className="flex items-center text-center justify-center gap-[10px]">
                  <FaRegUser color="#23A6F0" size={14} />
                  <Typography
                    sx={{
                      fontSize: '14px',
                      color: '#23A6F0',
                      fontWeight: '600',
                      cursor: 'pointer',
                    }}
                    component="p"
                  >
                    Login / Register
                  </Typography>
                </Box>
                <Box className="flex flex-col items-center gap-4">
                  <GoSearch size={19} color="#23A6F0" />
                  <Box
                    onClick={() => handleSetModal('cart')}
                    className="relative cursor-pointer"
                  >
                    <BsCart size={18} color="#23A6F0" />
                    <Typography className="absolute top-[-10px] text-[#23A6F0] text-[3px] left-5">
                      {cartArray.length}
                    </Typography>
                  </Box>
                  <Box
                    onClick={() => handleSetModal('wishlist')}
                    className="relative cursor-pointer"
                  >
                    <IoIosHeartEmpty size={20} color="#23A6F0" />
                    <Typography className="absolute top-[-10px] text-[#23A6F0] text-[3px] left-5">
                      {wishListArray.length}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Box>

      {modal && (
        <Modal setModal={setModal} title="Cart" body={body} total={totalBody} />
      )}
      {modal2 && <Modal setModal={setModal2} title="Wishlist" body={body2} />}
    </Box>
  );
};

export default TopNav;
