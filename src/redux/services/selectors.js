export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user.name;
export const getUserEmail = state => state.auth.user.email;
export const getToken = state => state.auth.token;
export const getGlobalUserData = state =>state.auth.user

export const selectBadProducts = state => state.products.bad;
export const selectCalories = state => state.products.calories;
export const selectLoadStatus = state => state.products.loading;
export const selectLoadError = state => state.products.error;
