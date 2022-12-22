import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth/authSelectors';

export const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return !isLoggedIn ? <Navigate to={redirectTo} /> : children;
};
