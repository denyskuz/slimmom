import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, setUserParams, refreshUser } from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
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
  isRefreshing: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [setUserParams]: (state, action) => {
      state.userParams = action.payload;
    },
    [register.fulfilled](state, action) {
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
      state.userParams = initialState.userParams;
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      const { email, name, ...userParams } = action.payload.data.user;
      state.user = {email, name};
      state.userParams = userParams;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
