import { List, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectCalories } from 'redux/products/selectors';
import { SummaryListItem } from './SummaryListItem';

export const SummaryList = () => {
  const dailyCalories = useSelector(selectCalories);
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
        <Typography>{dailyCalories || '000'} kcal</Typography>
      </SummaryListItem>
      <SummaryListItem disablePadding>
        <Typography>n% of normal</Typography>
        <Typography>000 kcal</Typography>
      </SummaryListItem>
    </List>
  );
};
