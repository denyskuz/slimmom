import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({
  children,
  redirectTo = '/',
  restricted = false,
}) => {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = isLoggedIn && restricted;
  
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};
