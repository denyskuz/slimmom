import { Helmet } from 'react-helmet-async';
import { SideBar } from 'components/SideBar';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';
import { BlockContainer } from './DiaryPage.styled';
import { Container } from '@mui/system';
import { useTranslation } from 'react-i18next';

export default function CalculatorPage() {
  const { t } = useTranslation();

  return (
    <Container>
      <Helmet>
        <title>{t('Diary')}</title>
      </Helmet>
      <BlockContainer>
        <DiaryDateCalendar />
        <DiaryAddProductForm />
      </BlockContainer>
      <SideBar />
    </Container>
  );
}
