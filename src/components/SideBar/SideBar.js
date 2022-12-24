import { Box } from '@mui/material';
import {
  SideBarContainer,
  BadFoodContainer,
  SummaryTitle,
} from './SideBar.stiled';
import { BadFoodList } from './BadFoodList';
import { SummaryList } from './SummaryList';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line
import i18n from './../../translations/i18n';

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
