import { useSelector } from 'react-redux';
import {
  getUserData,
  getIsLoggedIn,
  selectIsRefreshing,
} from 'redux/services/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(getUserData);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
