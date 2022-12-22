import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const DiaryPageContainer = styled(Box)(({ theme }) => ({
  paddingTop: 0,
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('tablet')]: {
    flexDirection: 'column',
  },
}));
