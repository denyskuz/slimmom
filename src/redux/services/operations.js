import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

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

export const login = createAsyncThunk(
  '/api/auth/login',
  async (data, thunkAPI) => {
    try {
      const res = await axios.post('/api/auth/login', data);
      token.set(res.data.data.accessToken);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProducts = createAsyncThunk(
  '/products/getBad',
  async (userParams, thunkAPI) => {
    try {
      const { data, status } = await axios.post('/products', userParams);
      token.set(data.token);
      if (!data) {
        return thunkAPI.rejectWithValue(status);
      }
      return data;
    } catch (err) {
      toast('Get products error');
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const logout = createAsyncThunk('/api/auth/logout', async () => {
  try {
    await axios.get(`/api/auth/logout`);
    token.unset();
  } catch (error) {}
});

export const deleteDiaryProduct = createAsyncThunk(
  'delete',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/api/diary/${id}`);
    } catch (error) {
      toast('product is not correct');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getAllDiaryProduct = createAsyncThunk(
  'getAll',
  async (date, thunkAPI) => {
    try {
      const res = await axios.get(`/api/diary/${date}`);
      return res;
    } catch (error) {
      toast('something went wrong!!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addDiaryProduct = createAsyncThunk(
  'addDiaryProduct',
  async (data, thunkAPI) => {
    try {
      await axios.post('api/diary', data);
    } catch (error) {
      toast('something went wrong!!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
