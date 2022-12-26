import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

import { darkTheme, lightTheme } from './themes';

export default function ThemeMode({ children }) {
  const theme = useSelector(state => state.theme);

  return (
    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
}
