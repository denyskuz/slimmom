import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const BadFoodContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('mobile')]: {
    marginTop: 40,
  },
  [theme.breakpoints.between('mobile', 'tablet')]: {
    marginLeft: 79,
  },
}));
