import { styled } from '@mui/system';
import { Grid } from '@mui/material';

export const CalculatorContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('mobile')]: {
    maxWidth: 240,
    marginTop: 32,
    marginLeft: 20,
  },
  [theme.breakpoints.up('mobile')]: {
    maxWidth: 240 * 2 + 32,
  },
  [theme.breakpoints.between('mobile', 'tablet')]: {
    marginTop: 100,
    marginLeft: 20,
  },
  [theme.breakpoints.up('tablet')]: {
    marginTop: 145,
    marginLeft: 16,
  },
}));
