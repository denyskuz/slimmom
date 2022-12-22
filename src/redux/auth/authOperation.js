import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const { REACT_APP_BACKEND_URL } = process.env;

axios.defaults.baseURL = 'https://slimmom-s41d.onrender.com';

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

export const login = createAsyncThunk(
  '/api/auth/login',
  async (data, thunkAPI) => {
    try {
      const res = await await axios.post('/api/auth/login', data);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return await thunkAPI.rejectWithValue(error.message);
    }
  }
);
