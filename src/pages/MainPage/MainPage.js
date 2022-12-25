import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import { Wrapper } from './MainPage.styled';
import Container from 'components/Container';
import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';

export default function MainPage() {
  return (
    <main>
      <Wrapper>
        <Container>
          <DailyCaloriesForm />
          <DiaryAddProductForm />
        </Container>
      </Wrapper>
    </main>
  );
}
