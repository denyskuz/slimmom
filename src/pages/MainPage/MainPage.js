import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import { Wrapper } from './MainPage.styled';

export default function MainPage() {
  return (
    <main>
      <Wrapper>
        <DailyCaloriesForm />
      </Wrapper>
    </main>
  );
}
