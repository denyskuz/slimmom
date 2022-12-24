import axios from 'axios';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
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
  async (value, thunkAPI) => {
    try {
      const { data } = await axios.post(`/api/auth/registration`, value);
      token.set(data.token);
      const res = await axios.post('/api/auth/login', {
        password: value.password,
        email: value.email,
      });
      return res.data;
    } catch (error) {
      toast('Register error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  '/api/auth/login',
  async (data, thunkAPI) => {
    try {
      const res = await axios.post('/api/auth/login', data);

      return res.data;
    } catch (error) {
      toast('Login error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProducts = createAsyncThunk(
  '/api/products',
  async (userParams, thunkAPI) => {
    try {
      const { data, status } = await axios.get('/api/products', userParams);
      token.set(data.token);
      if (!data) {
        return thunkAPI.rejectWithValue(status);
      }
      return data;
    } catch (err) {
      toast('Get products error', err.response.data);
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

export const setUserParams = createAction('auth/save');
