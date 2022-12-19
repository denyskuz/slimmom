import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk(
  '/api/auth/login',
  async (data, thunkAPI) => {
    try {
      // const res = await await axios.post('/api/auth/login', data);

      console.log('OPERATION:', data);
      return {
        token: 1111,
        data,
      };
    } catch (error) {
      console.log(error.message);
    }
  }
);
