import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Slice/loginSlice';
import { productsReducer } from './products/productSlice';
import { loadingReducer } from './loader/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    loading: loadingReducer,
  },
});
