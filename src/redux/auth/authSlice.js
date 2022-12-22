import { createSlice } from '@reduxjs/toolkit';
import { register } from './authOperation';
import { login } from './authOperation';
const initialState = {
  user: {
    name: null,
    email: null,
    password: null,
  },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = [action.meta.arg];
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.data.accessToken;
        state.user = action.payload.data.user;
        state.isLoggedIn = true;
      });
  },
});

export const authReducer = authSlice.reducer;
