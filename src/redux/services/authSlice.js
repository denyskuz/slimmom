import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout } from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
    age: 0,
    bloodType: 0,
    currentWeight: 0,
    desiredWeight: 0,
    height: 0,
  },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      console.log(action);
      state.user = action.payload.data.user;
      state.token = action.payload.data.accessToken;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.data.user;
      state.token = action.payload.data.accessToken;
      state.isLoggedIn = true;
    },
    [logout.fulfilled](state, _) {
      state.user = initialState.user;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;
