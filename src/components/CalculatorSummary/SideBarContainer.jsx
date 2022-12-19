import { styled } from '@mui/system';
import { Grid } from '@mui/material';

export const SideBarContainer = styled(Grid)(({ theme }) => ({
  background: '#F0F1F3',
  [theme.breakpoints.down('mobile')]: {
    padding: '40px 20px 24px 20px',
    width: '100%',
  },
  [theme.breakpoints.between('mobile', 'tablet')]: {
    display: 'flex',
    padding: '80px 80px 80px 32px',
    width: '100%',
  },
  [theme.breakpoints.up('tablet')]: {
    display: 'grid',
    alignContent: 'start',
    justifyContent: 'center',
    paddingTop: 145,
    minWidth: 517,
    gap: 60,
  },
}));
