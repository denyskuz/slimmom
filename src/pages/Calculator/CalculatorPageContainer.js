import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const CalculatorPageContainer = styled(Box)(({ theme }) => ({
  padding: 0,
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('tablet')]: {
    flexDirection: 'column',
  },
}));
