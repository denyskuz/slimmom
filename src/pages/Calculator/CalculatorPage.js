import { Helmet } from 'react-helmet';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import { SideBar } from 'components/SideBar';
import { CalculatorPageContainer } from './CalculatorPage.styled';
import Container from 'components/Container';

export default function CalculatorPage() {
  return (
    <Container>
      <Helmet>
        <title>Calories calculator</title>
      </Helmet>
      <CalculatorPageContainer>
        <DailyCaloriesForm />
        <SideBar />
      </CalculatorPageContainer>
    </Container>
  );
}
