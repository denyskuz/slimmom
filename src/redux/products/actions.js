import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getProducts = createAsyncThunk(
  'products/getBad',
  async (userParams, thunkAPI) => {
    try {
      const { data, status } = await axios.post('products', userParams);
      setAuthHeader(data.token);
      if (!data) {
        return await thunkAPI.rejectWithValue(status);
      }
      return data;
    } catch (err) {
      toast('Get products error');
      return await thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const addProducts = createAsyncThunk(
  'products/addItem',
  async (product, { rejectWithValue }) => {
    try {
      const result = await axios.post(`/diary/${product.date}`, { ...product });
      return result.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
