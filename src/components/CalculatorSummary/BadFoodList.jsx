import { List, Typography } from '@mui/material';
import { SummaryListItem } from './SummaryListItem';

export const BadFoodList = ({ data }) => {
  if (!data) {
    return (
      <Typography
        sx={theme => ({
          ...theme.summaryListMargin,
        })}
      >
        'Your diet will be displayed here'
      </Typography>
    );
  }
  return (
    <List
      sx={theme => ({
        ...theme.summaryListMargin,
      })}
      component="ol"
    >
      <SummaryListItem disablePadding>
        <Typography>Flour products</Typography>
      </SummaryListItem>
      <SummaryListItem disablePadding>
        <Typography>Milk</Typography>
      </SummaryListItem>
      <SummaryListItem disablePadding>
        <Typography>Red meat</Typography>
      </SummaryListItem>
      <SummaryListItem disablePadding>
        <Typography>Smoked meats</Typography>
      </SummaryListItem>
    </List>
  );
};
