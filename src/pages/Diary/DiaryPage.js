import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { SideBar } from 'components/SideBar';
import { DiaryPageContainer } from './DiaryPageContainer';
import { theme } from './theme';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';
import { BlockContainer } from './DiaryPage.styled';
import DiaryProductsListItem from 'components/DiaryProductsListItem/DiaryProductsListItem';
import { useDispatch } from 'react-redux';
import { getAllDiaryProduct } from 'redux/services/operations';

export default function CalculatorPage() {
  const dispatch = useDispatch();
  // all time send request with date now
  const date = new Date().toISOString();
  dispatch(getAllDiaryProduct(date));
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />

      <DiaryPageContainer>
        <Helmet>
          <title>Diary</title>
        </Helmet>
        <BlockContainer>
          <DiaryDateCalendar />
          <DiaryAddProductForm />
          <DiaryProductsListItem />
        </BlockContainer>
        <SideBar />
      </DiaryPageContainer>
    </ThemeProvider>
  );
}
