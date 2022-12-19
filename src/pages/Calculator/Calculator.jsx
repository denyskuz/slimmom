import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@mui/material/styles';
import { Typography, CssBaseline } from '@mui/material';
import { CalorieForm } from 'components/CalculatorСalorieForm/CalorieForm';
import { CalculatorContainer } from 'components/Calculator/CalculatorContainer';
import { CalculatorPageContainer } from './CalculatorPageContainer';
import { CalculatorSummary } from 'components/CalculatorSummary/CalculatorSummary';
import { theme } from './theme';

const Calculator = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <CalculatorPageContainer>
        <Helmet>
          <title>Calories calculator</title>
        </Helmet>
        <CalculatorContainer container justifyContent="left" justify="center">
          <Typography variant="title1" component="h2">
            Calculate your daily calorie intake right now
          </Typography>
          <CalorieForm />
        </CalculatorContainer>
        <CalculatorSummary />
      </CalculatorPageContainer>
    </ThemeProvider>
  );
};

export default Calculator;
