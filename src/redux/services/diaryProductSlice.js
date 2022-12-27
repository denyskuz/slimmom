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
    isLoading: false,
  },
  extraReducers: {
    [getAllDiaryProduct.fulfilled](state, action) {
      state.notes = action.payload;
    },
    [addDiaryProduct.fulfilled](state, action) {
      console.log(action.meta.arg._id);
      state.notes = [
        ...state.notes,
        {
          title: { ua: action.meta.arg.productName },
          id: action.payload.note._id,
          weight: action.meta.arg.weight,
          calories: action.meta.arg.prod.calories,
        },
      ];
    },
    [deleteDiaryProduct.fulfilled](state, action) {
      const index = state.notes.findIndex(({ id }) => {
        console.log(id === action.meta.arg);
        return id === action.meta.arg;
      });
      console.log('INDEX', index);
      state.notes.splice(index, 1);
    },

    [getNameProducts.fulfilled](state, action) {
      state.selectTitle = [...action.payload.products];
    },
  },
});
export const diaryReducer = diaryProductSlice.reducer;
