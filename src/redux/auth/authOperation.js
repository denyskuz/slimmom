import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

axios.defaults.baseURL = BASE_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  '/api/auth/registration',
  async credentials => {
    try {
      const { data } = await axios.post(`/api/auth/registration`, credentials);
      token.set(data.token);
      return data;
    } catch (error) {}
  }
);

// export const refreshUser = createAsyncThunk(
//   'api/auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();

//     if (state.auth.token === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }

//     try {
//       token.set(state.auth.token);
//       const res = await axios.get('api/auth/current');
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
