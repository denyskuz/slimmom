import { styled } from '@mui/system';
import { Container } from '@mui/material';

export const CalculatorPageContainer = styled(Container)(({ theme }) => ({
  padding: 0,
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('mobile')]: {
    maxWidth: 320,
  },
  [theme.breakpoints.between('mobile', 'tablet')]: {
    maxWidth: 768,
  },
  [theme.breakpoints.up('tablet')]: {
    maxWidth: 1280,
  },
  [theme.breakpoints.down('tablet')]: {
    flexDirection: 'column',
  },
}));
