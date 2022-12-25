import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { SideBar } from 'components/SideBar';
import { DiaryPageContainer } from './DiaryPageContainer';
import { theme } from './theme';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';
import { BlockContainer } from './DiaryPage.styled';

export default function DiaryPage() {
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
        </BlockContainer>
      </DiaryPageContainer>
      <SideBar />
    </ThemeProvider>
  );
}
