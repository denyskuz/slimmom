import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// import Main from './Main';
import { LoginPage } from 'Pages/LoginPage/LoginPage';
import { Route, Routes } from 'react-router-dom';
import { ButtonEmpty, ButtonPrimary } from './Button/Button';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/api" element={<ButtonPrimary />} />
    </Routes>
  );
};
