import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const FormInputContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('mobile')]: {
    marginTop: 54,
  },
  [theme.breakpoints.up('mobile')]: {
    display: 'flex',
    justifyContent: 'space-between',
    columnGap: 32,
    marginTop: 68,
  },
}));
