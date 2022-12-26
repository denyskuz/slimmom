import { lazy, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { HelmetProvider } from 'react-helmet-async';

import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import Layout from './Layout';
import { PublicRoute } from 'components/PublicRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import 'react-toastify/dist/ReactToastify.css';
// import AppBar from './Header/AppBar';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/services/operations';
import Loader from './Loader';

const MainPage = lazy(() => import('../pages/MainPage'));
const RegistrationPage = lazy(() => import('../pages/registration'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const DiaryPage = lazy(() => import('../pages/Diary/DiaryPage'));
const CalculatorPage = lazy(() => import('../pages/Calculator'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CssBaseline />
        {/* <AppBar /> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute redirectTo="/diary" restricted>
                  <MainPage />
                </PublicRoute>
              }
            />
            <Route
              path="signup"
              element={
                <PublicRoute redirectTo="/diary" restricted>
                  <RegistrationPage />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute redirectTo="/diary" restricted>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="diary"
              element={
                <PrivateRoute>
                  <DiaryPage />
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
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        <ToastContainer theme="colored" position="bottom-right" />
      </ThemeProvider>
    </HelmetProvider>
  );
};
