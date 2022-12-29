import { Box } from '@mui/material';
import {
  SideBarContainer,
  BadFoodContainer,
  SummaryTitle,
} from './SideBar.styled';
import { SummaryList } from './SummaryList';
import { useTranslation } from 'react-i18next';
import { CategoriesList } from 'components/DailyCalorieIntake/categoriesList';

export const SideBar = () => {
  const { t } = useTranslation();

  return (
    <SideBarContainer>
      <Box sx={{ maxWidth: 450 }}>
        <SummaryTitle>
          {t('Summary_for')} {new Date().toDateString()}
        </SummaryTitle>
        <SummaryList />
      </Box>
      <BadFoodContainer>
        <SummaryTitle>{t('Food_not_recommended')}</SummaryTitle>
        <CategoriesList onMain={false} />
      </BadFoodContainer>
    </SideBarContainer>
  );
};
