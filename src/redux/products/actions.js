import axios from 'axios';
import toast from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = process.env.BACKEND_URL;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getProducts = createAsyncThunk('auth/login', async userParams => {
  const { data } = await axios
    .post('users/login', userParams)
    .catch(function (error) {
      toast(error.message);
    });
  setAuthHeader(data.token);
  return data;
});
