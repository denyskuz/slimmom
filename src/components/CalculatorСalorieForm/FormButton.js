import { styled } from '@mui/system';
import { Button } from '@mui/material';

export const FormButton = styled(Button)(({ theme }) => ({
  maxWidth: 210,
  padding: '13px 25px',
  borderRadius: 30,
  textTransform: 'none',
  '&:hover': {
    color: theme.palette.button.main,
    background: theme.palette.button.contrastText,
  },
  boxShadow: '0px 4px 10px rgba(252, 132, 45, 0.5);',
  [theme.breakpoints.down('mobile')]: {
    marginTop: 40,
  },
  [theme.breakpoints.between('mobile', 'tablet')]: {
    marginTop: 60,
  },
  [theme.breakpoints.up('tablet')]: {
    marginTop: 80,
    marginLeft: 239,
  },
}));
