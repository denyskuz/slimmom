import { Box } from '@mui/material';
import {
  SideBarContainer,
  BadFoodContainer,
  SummaryTitle,
} from './SideBar.styled';
import { BadFoodList } from './BadFoodList';
import { SummaryList } from './SummaryList';
import { useTranslation } from 'react-i18next';

export const SideBar = () => {
  const { t } = useTranslation();
  return (
    <SideBarContainer>
      <Box>
        <SummaryTitle>
          {t('Summary_for')} {new Date().toDateString()}
        </SummaryTitle>
        <SummaryList />
      </Box>
      <BadFoodContainer>
        <SummaryTitle>{t('Food_not_recommended')}</SummaryTitle>
        <BadFoodList />
      </BadFoodContainer>
    </SideBarContainer>
  );
};
