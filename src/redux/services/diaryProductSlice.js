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
    notes: [{ title: { ua: '' }, id: '', weight: '', calories: '' }],
    selectTitle: [],
    isLoading: false,
  },
  extraReducers: {
    [getAllDiaryProduct.fulfilled](state, action) {
      state.notes = action.payload;
    },
    [addDiaryProduct.fulfilled](state, action) {
      state.notes = [
        ...state.notes,
        {
          title: { ua: action.meta.arg.productName },
          id: action.meta.arg.product,
          weight: action.meta.arg.weight,
          calories: action.meta.arg.prod.calories,
        },
      ];
    },
    [deleteDiaryProduct.pending](state, action) {
      state.isLoading = true;
    },
    [deleteDiaryProduct.fulfilled](state, action) {
      const index = state.notes.findIndex(({ id }) => id === action.meta.arg);
      const newState = state.notes.splice(index, 1);
      state.notes = newState;
      state.isLoading = false;
    },
    [deleteDiaryProduct.rejected](state, action) {
      state.isLoading = false;
    },
    [getNameProducts.fulfilled](state, action) {
      state.selectTitle = [...action.payload.products];
    },
  },
});
export const diaryReducer = diaryProductSlice.reducer;
