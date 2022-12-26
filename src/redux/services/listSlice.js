import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getProductsByCategories } from './operations';

const listSlice = createSlice({
  name: 'list',
  initialState: {
    list: [],
    loading: false,
    error: '',
  },
  extraReducers: builder => {
    builder.addCase(getProductsByCategories.pending, state => {
      state.loading = true;
    });
    builder.addCase(getProductsByCategories.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(getProductsByCategories.fulfilled, (state, action) => {
      state.list = action.payload.products;
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

export const listReducer = listSlice.reducer;
