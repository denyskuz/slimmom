import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

export const login = createAsyncThunk(
  '/api/auth/login',
  async (data, thunkAPI) => {
    try {
      const res = await UserAPI(data);
      //   await axios.post('/api/auth/login', data);
      console.log('OPERATION:', res);
      return res;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const UserAPI = async data => {
  return data;
};
