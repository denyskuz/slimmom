import { Box } from '@mui/material';
import {
  SideBarContainer,
  SideBarContainerDark,
  SummaryTitleDark,
  BadFoodContainer,
  SummaryTitle,
} from './SideBar.styled';
import { SummaryList } from './SummaryList';
import { useTranslation } from 'react-i18next';
import { CategoriesList } from 'components/DailyCalorieIntake/categoriesList';
import { useSelector } from 'react-redux';

export const SideBar = () => {
  const { t } = useTranslation();
  const theme = useSelector(state => state.theme.darkTheme);

  return (
    <>
      {!theme ? (
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
      ) : (
        <SideBarContainerDark>
          <Box sx={{ maxWidth: 450 }}>
            <SummaryTitleDark>
              {t('Summary_for')} {new Date().toDateString()}
            </SummaryTitleDark>
            <SummaryList />
          </Box>
          <BadFoodContainer>
            <SummaryTitleDark>{t('Food_not_recommended')}</SummaryTitleDark>
            <CategoriesList onMain={false} />
          </BadFoodContainer>
        </SideBarContainerDark>
      )}
    </>
  );
};
