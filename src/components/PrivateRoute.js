import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = false;
  return !isLoggedIn ? <Navigate to={redirectTo} /> : children;
};
