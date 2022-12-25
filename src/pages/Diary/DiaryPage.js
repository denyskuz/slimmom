import { Helmet } from 'react-helmet-async';
import { SideBar } from 'components/SideBar';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';
import { BlockContainer } from './DiaryPage.styled';
import DiaryProductsListItem from 'components/DiaryProductsListItem/DiaryProductsListItem';
import { getAllDiaryProduct } from 'redux/services/operations';
import { Container } from '@mui/system';

import { useDispatch } from 'react-redux';
export default function CalculatorPage() {
  const dispatch = useDispatch();
  // all time send request with date now
  const date = new Date().toISOString();
  dispatch(getAllDiaryProduct(date));
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
