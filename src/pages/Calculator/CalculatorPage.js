import { Helmet } from 'react-helmet-async';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import { SideBar } from 'components/SideBar';
import { Container } from '@mui/system';

export default function CalculatorPage() {
  return (
    <Container>
      <Helmet>
        <title>Calories calculator</title>
      </Helmet>
      <DailyCaloriesForm />
      <SideBar />
    </Container>
  );
}
