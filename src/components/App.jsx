import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout';
import { PublicRoute } from 'components/PublicRoute';
import { PrivateRoute } from 'components/PrivateRoute';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const DairyPage = lazy(() => import('../pages/DairyPage'));
const CalculatorPage = lazy(() => import('../pages/CalculatorPage'));

export const App = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
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
      </ThemeProvider>
    </>
  );
};
