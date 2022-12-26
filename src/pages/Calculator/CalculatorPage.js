import { Helmet } from 'react-helmet-async';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import { SideBar } from 'components/SideBar';
import Container from 'components/Container';
import { Wrapper } from 'pages/Diary/DiaryPage.styled';

export default function CalculatorPage() {
  return (
    <Wrapper>
      <Container>
        <Helmet>
          <title>Calories calculator</title>
        </Helmet>
        <DailyCaloriesForm />
      </Container>
      <SideBar />
    </Wrapper>
  );
}
