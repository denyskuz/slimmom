import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Slice/loginSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
