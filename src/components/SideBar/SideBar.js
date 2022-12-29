import { Box } from '@mui/material';
import {
  SideBarContainer,
  SideBarContainerDark,
  BadFoodContainer,
  SummaryTitle,
  SummaryTitleDark,
} from './SideBar.styled';
import { SummaryList } from './SummaryList';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { CategoriesList } from 'components/DailyCalorieIntake/categoriesList';

export const SideBar = () => {
  const { t } = useTranslation();
  const theme = useSelector(state => state.theme.darkTheme);

  return (
    <>
      {!theme ? (
        <SideBarContainer>
          <Box>
            <SummaryTitle>{t('Summary_for')} {new Date().toDateString()}</SummaryTitle>
        <SummaryList />
      </Box>
          <BadFoodContainer>
            <SummaryTitle>{t('Food_not_recommended')}</SummaryTitle>
        <CategoriesList onMain={false} />
      </BadFoodContainer>
    </SideBarContainer>
      ) : (
          <SideBarContainerDark>
      <Box>
        <SummaryTitleDark>{t('Summary_for')} {new Date().toDateString()}</SummaryTitleDark>
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
