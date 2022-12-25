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
      state.notes = action.payload.notes;
    },
    [addDiaryProduct.fulfilled](state, action) {
      console.log(action);
      // state.notes.push(action.payload);
    },
    [deleteDiaryProduct.fulfilled](state, action) {
      const index = state.notes.findIndex(({ _id }) => _id === action.meta.arg);
      state.notes.splice(index, 1);
    },
    [getNameProducts.fulfilled](state, action) {
      state.selectTitle = action.payload.products;
    },
  },
});
export const diaryReducer = diaryProductSlice.reducer;
