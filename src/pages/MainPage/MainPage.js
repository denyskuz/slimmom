import { Helmet } from 'react-helmet-async';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import { Wrapper } from './MainPage.styled';
import Container from 'components/Container';


export default function MainPage() {
  return (
    <main>
      <Helmet>
        <title>Slim MOM</title>
      </Helmet>
      <Wrapper>
        <Container>
          <DailyCaloriesForm />
        </Container>
      </Wrapper>
    </main>
  );
}
