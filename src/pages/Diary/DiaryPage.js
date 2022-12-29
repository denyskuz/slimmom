import { Helmet } from 'react-helmet-async';
import { SideBar } from 'components/SideBar';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';

import DiaryProductsListItem from 'components/DiaryProductsListItem/DiaryProductsListItem';
import { Container } from '@mui/system';
import { useMediaQuery } from 'react-responsive';
import { Wrapper } from 'pages/MainPage/MainPage.styled';
export default function CalculatorPage() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <Wrapper>
      <Container>
        <Helmet>
          <title>Diary</title>
        </Helmet>

        {isMobile ? (
          <>
            <DiaryDateCalendar />
            <DiaryProductsListItem />
            <DiaryAddProductForm />
          </>
        ) : (
          <>
            <DiaryDateCalendar />
            <DiaryAddProductForm />
            <DiaryProductsListItem />
          </>
        )}
      </Container>
      <SideBar />
    </Wrapper>
  );
}
