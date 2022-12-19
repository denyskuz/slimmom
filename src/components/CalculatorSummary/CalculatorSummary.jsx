import { Typography, Box } from '@mui/material';
import { SideBarContainer } from './SideBarContainer';
import { BadFoodList } from './BadFoodList';
import { SummaryList } from './SummaryList';
import { BadFoodContainer } from './BadFoodContainer';

export const CalculatorSummary = () => {
  return (
    <SideBarContainer>
      <Box>
        <Typography variant="title3" component="h3">
          Summary for 20/06/2020
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
