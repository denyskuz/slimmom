import { createSlice } from '@reduxjs/toolkit';
import { register } from './authOperation';

const initialState = {
  user: {
    name: null,
    email: null,
    password: null,
  },
  token: null,
  isLoggedIn: false,
  // isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = [action.meta.arg];
      state.isLoggedIn = true;
    });
    // .addCase(refreshUser.pending, (state, action) => {
    //   state.isRefreshing = true;
    // })
    // .addCase(refreshUser.fulfilled, (state, action) => {
    //   state.user = action.payload.user;
    //   state.isLoggedIn = true;
    //   state.isRefreshing = false;
    // })
    // .addCase(refreshUser.rejected, (state, action) => {
    //   state.isRefreshing = false;
    // });
  },
});

export const authReducer = authSlice.reducer;
