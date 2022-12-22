import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/services/selectors';

export const PublicRoute = ({
  children,
  redirectTo = '/',
  restricted = false,
}) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};
