import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Slice/loginSlice';
import { productsReducer } from './products/productSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
  },
});
