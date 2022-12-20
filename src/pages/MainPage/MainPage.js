import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import { Wrapper } from './MainPage.styled';
import Container from 'components/Container';


export default function MainPage() {
  return (
    <main>
      <Wrapper>
        <Container >
          <DailyCaloriesForm />
        </Container>
      </Wrapper>
    </main>
  );
}
