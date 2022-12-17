import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@mui/material/styles';
import { Container, Grid, Typography, CssBaseline } from '@mui/material';
import { CalorieForm } from 'components/CalculatorСalorieForm/CalorieForm';
import { theme } from './theme';

const Contacts = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Container sx={{ width: 400 }}>
        <Helmet>
          <title>Calories calculator</title>
        </Helmet>
        <Typography variant="title1" component="h2">
          Calculate your daily calorie intake right now
        </Typography>
        <Grid container justifyContent="center" justify="center">
          <CalorieForm />
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Contacts;
