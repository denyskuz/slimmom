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
import { getDiaryDay } from 'redux/services/selectors';

export const SideBar = () => {
  const { t } = useTranslation();
  const theme = useSelector(state => state.theme.darkTheme);
  const day = useSelector(getDiaryDay);

  return (
    <>
      {!theme ? (
        <SideBarContainer>
          <Box sx={{ maxWidth: 450 }}>
            <SummaryTitle>
              {t('Summary_for')} {day.substring(0, 10)}
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
              {t('Summary_for')} {day.substring(0, 10)}
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
