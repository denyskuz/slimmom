import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getProducts } from './actions';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
  },
  extraReducers: builder => {
    builder.addCase(isAnyOf(getProducts.pending), state => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.items = action.payload;
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
