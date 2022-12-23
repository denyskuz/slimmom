import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getProducts, setUserParams } from './operations';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    calories: 0,
    bad: [],
    userParams: null,
    loading: false,
    error: '',
  },
  extraReducers: builder => {
    builder.addCase(setUserParams, (state, action) => {
      state.userParams = action.payload;
    });
    builder.addCase(getProducts.pending, state => {
      state.loading = true;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.calories = action.payload.kCal;
      state.bad = action.payload.products;
    });
    builder.addMatcher(
      isAnyOf(
        action => action.type.endsWith('/rejected'),
        action => action.type.endsWith('/fulfilled')
      ),
      state => {
        state.loading = false;
      }
    );
  },
});

export const productsReducer = productsSlice.reducer;
