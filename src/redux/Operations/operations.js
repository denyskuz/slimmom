import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-s41d.onrender.com';

export const login = createAsyncThunk(
  '/api/auth/login',
  async (data, thunkAPI) => {
    try {
      const res = await await axios.post('/api/auth/login', data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
