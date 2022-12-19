import { List, Typography } from '@mui/material';
import { SummaryListItem } from './SummaryListItem';

export const SummaryList = ({ data }) => {
  return (
    <List
      sx={theme => ({
        ...theme.summaryListMargin,
      })}
      component="ol"
    >
      <SummaryListItem disablePadding>
        <Typography>Left</Typography>
        <Typography>000 kcal</Typography>
      </SummaryListItem>
      <SummaryListItem disablePadding>
        <Typography noWrap>Consumed</Typography>
        <Typography>000 kcal</Typography>
      </SummaryListItem>
      <SummaryListItem disablePadding>
        <Typography>Daily rate</Typography>
        <Typography>000 kcal</Typography>
      </SummaryListItem>
      <SummaryListItem disablePadding>
        <Typography>n% of normal</Typography>
        <Typography>000 kcal</Typography>
      </SummaryListItem>
    </List>
  );
};
