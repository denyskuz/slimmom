import { createSlice, isAnyOf, isRejected } from '@reduxjs/toolkit';
import {
  getProducts,
  getDailyProducts,
  getProductsCategories,
} from './operations';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    calories: 0,
    categories: [],
    bad: [],
    daily: [],
    loading: false,
    error: '',
  },
  extraReducers: builder => {
    builder.addCase(
      isAnyOf(getProducts.pending, getDailyProducts.pending),
      state => {
        state.loading = true;
      }
    );

    builder.addCase(getDailyProducts.fulfilled, (state, action) => {
      state.daily = action.payload;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.calories = action.payload.kCal;
      state.bad = action.payload.products;
    });
    builder.addCase(getProductsCategories.pending, state => {
      state.loading = true;
    });
    builder.addCase(getProductsCategories.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(getProductsCategories.fulfilled, (state, action) => {
      state.categories = action.payload.titles;
    });
    builder.addMatcher(
      isRejected(getProducts, getDailyProducts),
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
