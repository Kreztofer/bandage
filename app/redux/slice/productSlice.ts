import { createSlice } from '@reduxjs/toolkit';
import { PRODUCT } from '@/app/models';

const loadCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : [];
};

const loadWishlistFromLocalStorage = () => {
  const storedWishlist = localStorage.getItem('wishlist');
  return storedWishlist ? JSON.parse(storedWishlist) : [];
};

interface CartItem extends PRODUCT {
  quantity: number;
}

interface WishlistItem extends PRODUCT {}

interface ProductState {
  products: PRODUCT[];
  productDetail: PRODUCT | null;
  cart: CartItem[];
  wishlist: WishlistItem[];
}

const initialState: ProductState = {
  products: [],
  productDetail: null,
  cart: loadCartFromLocalStorage(),
  wishlist: loadWishlistFromLocalStorage(),
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    STORE_PRODUCTS(state, action) {
      state.products = action.payload.products;
    },
    PRODUCT_DETAIL(state, action) {
      state.productDetail = action.payload.products;
    },
    ADD_TO_CART(state, action) {
      const newItem = { ...action.payload, quantity: 1 };
      const existingItem = state.cart.find((item) => item.id === newItem.id);
      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.cart = [...state.cart, newItem];
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    INCREASE_QUANTITY(state, action) {
      const itemIdToIncrease = action.payload;
      state.cart = state.cart.map((item) =>
        item.id === itemIdToIncrease
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    DECREASE_QUANTITY(state, action) {
      const itemIdToDecrease = action.payload;
      state.cart = state.cart.map((item) =>
        item.id === itemIdToDecrease
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
          : item
      );
      state.cart = state.cart.filter(
        (item) => !(item.id === itemIdToDecrease && item.quantity === 0)
      );

      localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    REMOVE_FROM_CART(state, action) {
      const itemIdToRemove = action.payload;
      state.cart = state.cart.filter((item) => item.id !== itemIdToRemove);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    REMOVE_ALL_FROM_CART(state) {
      state.cart = [];
      localStorage.removeItem('cart');
    },
    ADD_TO_WISHLIST(state, action) {
      const newItem = action.payload;
      if (!state.wishlist.find((item) => item.id === newItem.id)) {
        state.wishlist = [...state.wishlist, newItem];
        localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
      }
    },
    REMOVE_FROM_WISHLIST(state, action) {
      const itemIdToRemove = action.payload;
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== itemIdToRemove
      );
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },
  },
});

export const {
  STORE_PRODUCTS,
  PRODUCT_DETAIL,
  ADD_TO_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_FROM_CART,
  ADD_TO_WISHLIST,
  REMOVE_ALL_FROM_CART,
  REMOVE_FROM_WISHLIST,
} = productSlice.actions;

export default productSlice.reducer;
