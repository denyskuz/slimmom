import { lazy } from 'react';
// import { useSelector, useDispatch} from 'react-redux';
// import { showLoading } from 'redux/loader/operation';
// import { getIsRefreshing } from 'redux/auth/authSelectors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './Layout';
import { PublicRoute } from 'components/PublicRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from './Header/AppBar';
// import { Loader } from './Loader/Loader';
// import { selectIsLoading } from 'redux/loader/selectors';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const MainPage = lazy(() => import('../pages/MainPage'));
const RegistrationPage = lazy(() => import('../pages/registration'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const DairyPage = lazy(() => import('../pages/DairyPage'));
const CalculatorPage = lazy(() => import('../pages/Calculator/CalculatorPage'));

export const App = () => {
  // const dispatch = useDispatch();
  // const { isLoading } = useSelector(selectIsLoading);

  // useEffect(() => {
  //   dispatch(showLoading());
  // }, [dispatch]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <AppBar />
        {/* <Loader></Loader> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute redirectTo="/" restricted>
                <MainPage />
              </PublicRoute>
            }
          />
          <Route
            path="signup"
            element={
              <PublicRoute redirectTo="/dairy" restricted>
                <RegistrationPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/dairy" restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="dairy"
            element={
              <PrivateRoute>
                <DairyPage />
              </PrivateRoute>
            }
          />
          <Route
            path="calculator"
            element={
              <PrivateRoute>
                <CalculatorPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <ToastContainer />
    </ThemeProvider>
  );
};
