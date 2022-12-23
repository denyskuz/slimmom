import { Helmet } from 'react-helmet';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import { SideBar } from 'components/SideBar';
import { CalculatorPageContainer } from './CalculatorPage.styled';

export default function CalculatorPage() {
  return (
    <CalculatorPageContainer>
      <Helmet>
        <title>Calories calculator</title>
      </Helmet>
      <DailyCaloriesForm />
      <SideBar />
    </CalculatorPageContainer>
  );
}
