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
      state.user = action.meta.arg;
      state.token = action.payload.data.accessToken;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, action) {
      console.log('log slice', action);
      state.user = { name: action.payload.data.user.name, ...action.meta.arg };
      state.token = action.payload.data.accessToken;
      state.isLoggedIn = true;
    },
    [logout.fulfilled](state, _) {
      state.user = initialState.user;
      state.userParams = initialState.userParams;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;
