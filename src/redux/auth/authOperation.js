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
