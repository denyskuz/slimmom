import { styled, ListItem } from '@mui/material';

export const SummaryListItem = styled(ListItem)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  '& + &': {
    marginTop: 28,
  },
}));
