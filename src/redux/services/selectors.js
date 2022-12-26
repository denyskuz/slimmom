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

export const getAllDiaryProduct = state => state.diary.notes;
export const getProductTitle = state => state.diary.selectTitle;
export const selectBadCategories = state => state.products.categories;

