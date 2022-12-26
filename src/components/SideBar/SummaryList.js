import { List, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectCalories } from 'redux/services/selectors';
import { SummaryListItem } from './SideBar.styled';

export const SummaryList = () => {
  const dailyCalories = useSelector(selectCalories);
  return (
    <List component="ol" padding='0px'>
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
