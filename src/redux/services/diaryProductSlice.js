const { createSlice } = require('@reduxjs/toolkit');
const { getAllDiaryProduct } = require('./operations');

const diaryProductSlice = createSlice({
  name: 'diaryProduct',
  initialState: [],
  extraReducers: {
    [getAllDiaryProduct](state, action) {
      state = action.notes;
    },
  },
});
export const diaryReducer = diaryProductSlice.reducer;
