import { createSelector } from '@reduxjs/toolkit';

export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user.name;
export const getUserEmail = state => state.auth.user.email;
export const getToken = state => state.auth.token;
export const getUserData = state => state.auth.user;
export const selectUserParams = state => state.auth.userParams;
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const getGlobalUserData = createSelector(
  [getUserData, selectUserParams],
  (user, params) => {
    return { ...user, ...params };
  }
);

export const selectBadProducts = state => state.products.bad;
export const selectCalories = state => state.products.calories;
export const selectLoadStatus = state => state.products.loading;
export const selectLoadError = state => state.products.error;

export const getAllGroupDiaryProduct = state => {
  let notes = [];
  let keys = [];
  state.diary.notes.forEach(note => {
    if (!keys.includes(note.product._id)) {
      keys.push(note.product._id);
    }
  });
  keys.forEach(key => {
    const grouped = state.diary.notes
      .filter(note => note.product._id === key)
      .reduce(
        (total, current) => {
          total.title = current.product.title;
          total.id = current.product._id;
          total.weight += current.weight;
          total.calories += Math.round(
            (current.product.calories / 100) * current.weight
          );
          return total;
        },
        { title: '', id: '', weight: 0, calories: 0 }
      );
    notes.push(grouped);
  });
  return notes;
};
export const getAllDiaryProduct = state => {
  const mappedData = state.diary.notes.map(note => ({
    title: note.product.title,
    id: note._id,
    weight: note.weight,
    calories: Math.round((note.product.calories / 100) * note.weight),
  }));
  return mappedData;
};
export const getProductTitle = state => state.diary.selectTitle;
export const getIsLoading = state => state.diary.IsLoading;

export const selectBadCategories = state => state.products.categories;
