import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Calculator from '../pages/Calculator/Calculator';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});
export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Calculator />
    </ThemeProvider>
  );
};
