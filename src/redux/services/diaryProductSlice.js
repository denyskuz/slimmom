const { createSlice } = require('@reduxjs/toolkit');
const {
  getAllDiaryProduct,
  addDiaryProduct,
  deleteDiaryProduct,
  getNameProducts,
} = require('./operations');

const diaryProductSlice = createSlice({
  name: 'diaryProduct',
  initialState: {
    notes: [],
    selectTitle: [],
  },
  extraReducers: {
    [getAllDiaryProduct.fulfilled](state, action) {
      state.notes = action.payload;
    },
    [addDiaryProduct.fulfilled](state, action) {
      state.notes = [...state.notes, action.payload];
    },
    [deleteDiaryProduct.fulfilled](state, action) {
      state.notes = state.notes.filter(note => note._id !== action.payload);
    },
    [getNameProducts.fulfilled](state, action) {
      state.selectTitle = action.payload.products;
    },
  },
});
export const diaryReducer = diaryProductSlice.reducer;
