import { createSlice } from "@reduxjs/toolkit";
import { register } from "./authOperation";

const initialState = {
    user: {
        name: null,
        email: null,
        password: null,
    },
    token: null,
    isLoggedIn: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = [action.meta.arg]
      state.isLoggedIn = true
    })
  }
});

export const authReducer = authSlice.reducer;
