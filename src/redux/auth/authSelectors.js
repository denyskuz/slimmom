const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getToken = state => state.auth.token;

export const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getUserEmail,
    getToken,
}

