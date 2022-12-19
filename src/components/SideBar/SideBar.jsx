import { Typography, Box } from '@mui/material';
import { SideBarContainer } from './SideBarContainer';
import { BadFoodList } from './BadFoodList';
import { SummaryList } from './SummaryList';
import { BadFoodContainer } from './BadFoodContainer';

export const SideBar = () => {
  return (
    <SideBarContainer>
      <Box>
        <Typography variant="title3" component="h3">
          Summary for {new Date().toDateString()}
        </Typography>
        <SummaryList />
      </Box>
      <BadFoodContainer>
        <Typography variant="title3" component="h3">
          Food not recommended
        </Typography>
        <BadFoodList />
      </BadFoodContainer>
    </SideBarContainer>
  );
};
