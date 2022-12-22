import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';
export const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return !isLoggedIn ? <Navigate to={redirectTo} /> : children;
};
