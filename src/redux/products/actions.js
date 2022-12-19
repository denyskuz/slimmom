import axios from 'axios';
import toast from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';

//axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
axios.defaults.baseURL = 'http://localhost:3001/api/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getProducts = createAsyncThunk(
  'products/get',
  async userParams => {
    const { data } = await axios
      .post('products', userParams)
      .catch(function (error) {
        toast(error.message);
      });
    setAuthHeader(data.token);
    return data;
  }
);
