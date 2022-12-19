import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getProducts } from './actions';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    calories: 0,
    bad: [],
    loading: false,
  },
  extraReducers: builder => {
    builder.addCase(isAnyOf(getProducts.pending), state => {
      state.loading = true;
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
