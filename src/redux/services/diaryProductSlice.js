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
      // const idToAdd = action.meta.arg.dataTitle;
      // const idWhatAdd = action.meta.arg.product;
      // const productToAdd = idToAdd.filter(({ _id }) => _id === idWhatAdd);
      console.log('action', action);
      console.log('action', action);
      state.notes = [
        ...state.notes,
        { title: action.meta.arg.productName, id: action.meta.arg.product },
      ];
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