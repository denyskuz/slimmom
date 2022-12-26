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

export const SideBar = () => {
  return (
    <SideBarContainer>
      <Box>
        <SummaryTitle>Summary for {new Date().toDateString()}</SummaryTitle>
        <SummaryList />
      </Box>
      <BadFoodContainer>
        <SummaryTitle>Food not recommended</SummaryTitle>
        <BadFoodList />
      </BadFoodContainer>
      <BackgroundImageTab src={leafsTabSideBar} alt="leafs" />
      <BackgroundImageDesk src={leafsDeskSideBar} alt="leafs" />
    </SideBarContainer>
  );
};
