import { Helmet } from 'react-helmet-async';
import { SideBar } from 'components/SideBar';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';
import { BlockContainer } from './DiaryPage.styled';
import { Container } from '@mui/system';

export default function CalculatorPage() {
  return (
    <Container>
      <Helmet>
        <title>Diary</title>
      </Helmet>
      <BlockContainer>
        <DiaryDateCalendar />
        <DiaryAddProductForm />
      </BlockContainer>
      <SideBar />
    </Container>
  );
}
