import { createSlice, isAnyOf, isRejected } from '@reduxjs/toolkit';
import { getProducts, getProductsCategories } from './operations';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    calories: 0,
    categories: [],
    bad: [],
    loading: false,
    error: '',
  },
  extraReducers: builder => {
    builder.addCase(
      isAnyOf(getProducts.pending, getProductsCategories.pending),
      state => {
        state.loading = true;
      }
    );
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.calories = action.payload.kCal;
      state.bad = action.payload.products;
    });
    builder.addCase(getProductsCategories.fulfilled, (state, action) => {
      state.categories = action.payload.titles;
    });
    builder.addMatcher(
      isRejected(getProducts, getProductsCategories),
      (state, action) => {
        state.error = action.error;
      }
    );
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
