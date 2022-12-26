import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getProducts, getDailyProducts } from '../products/actions';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    calories: 0,
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
    builder.addCase(
      isAnyOf(getProducts.rejected, getDailyProducts.rejected),
      (state, action) => {
        state.error = action.error;
      }
    );
    builder.addCase(getDailyProducts.fulfilled, (state, action) => {
      state.daily = action.payload;
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
