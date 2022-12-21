import { Typography } from '@mui/material';
import { CalorieForm } from 'components/CalculatorСalorieForm';
import { CalculatorContainer } from './CalculatorContainer';

export const Calculator = () => (
  <CalculatorContainer container justifyContent="left" justify="center">
    <Typography variant="title1" component="h2">
      Calculate your daily calorie intake right now
    </Typography>
    <CalorieForm />
  </CalculatorContainer>
);
