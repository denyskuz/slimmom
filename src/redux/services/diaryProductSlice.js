const { createSlice } = require('@reduxjs/toolkit');
const { getAllDiaryProduct } = require('./operations');

const diaryProductSlice = createSlice({
  name: 'diaryProduct',
  initialState: { notes: [] },
  extraReducers: {
    [getAllDiaryProduct.fulfilled](state, action) {
      state.notes = action.payload.data.notes;
    },
  },
});
export const diaryReducer = diaryProductSlice.reducer;
