import { login } from 'redux/Operations/operations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { email: ' ', password: ' ' },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [login.fulfilled](state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.data;
      console.log(action.payload.data);
    },
  },
});

export const authReducer = authSlice.reducer;
