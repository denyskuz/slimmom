import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Calculator } from 'components/Calculator';
import { SideBar } from 'components/SideBar';
import { CalculatorPageContainer } from './CalculatorPageContainer';
import Container from 'components/Container';
import { theme } from './theme';

export default function CalculatorPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />

      <CalculatorPageContainer>
        <Helmet>
          <title>Calories calculator</title>
        </Helmet>
        <Container>
          <Calculator />
        </Container>
        <SideBar />
      </CalculatorPageContainer>
    </ThemeProvider>
  );
}
