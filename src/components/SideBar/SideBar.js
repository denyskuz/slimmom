import { Box } from '@mui/material';
import {
  SideBarContainer,
  BadFoodContainer,
  SummaryTitle,
  BackgroundImageTab,
  BackgroundImageDesk,
} from './SideBar.styled';
import { BadFoodList } from './BadFoodList';
import { SummaryList } from './SummaryList';
import leafsDeskSideBar from '../../images/background/leafsDeskSideBar.png';
import leafsTabSideBar from '../../images/background/leafsTabSideBar.png';
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
      <BackgroundImageTab src={leafsTabSideBar} alt="leafs" />
      <BackgroundImageDesk src={leafsDeskSideBar} alt="leafs" />
    </SideBarContainer>
  );
};
