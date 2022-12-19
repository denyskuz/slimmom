import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CalculatorPage } from 'pages/Calculator';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});
export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CalculatorPage />
    </ThemeProvider>
  );
};
