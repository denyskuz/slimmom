import { Box } from '@mui/material';
import {
  SideBarContainer,
  BadFoodContainer,
  SummaryTitle,
} from './SideBar.stiled';
import { BadFoodList } from './BadFoodList';
import { SummaryList } from './SummaryList';

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
    </SideBarContainer>
  );
};