import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, setUserParams } from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
  },
  userParams: {
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
    [setUserParams]: (state, action) => {
      state.userParams = action.payload;
    },
    [register.fulfilled](state, action) {
      state.user = { ...state.user, ...action.payload.data.user };
      state.userParams = { ...state.userParams, ...action.payload.data.user };
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = { ...state.user, ...action.payload.data.user };
      state.userParams = { ...state.userParams, ...action.payload.data.user };
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
