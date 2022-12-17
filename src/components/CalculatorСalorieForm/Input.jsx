import { styled } from '@mui/system';
import { TextField } from '@mui/material';

export const Input = styled(TextField, {
  shouldForwardProp: (props) => props !== 'bloodType',
})(({ theme, bloodType }) => ({
  marginTop: theme => theme.spacing(2),
  maxWidth: '100%',
  [theme.breakpoints.down('mobile')]: {
    ...(bloodType && {
      '.MuiInputBase-root': {
        visibility: 'hidden',
      },
    }),
  },
}));

Input.defaultProps = {
  InputProps: { inputMode: 'numeric', pattern: '[0-9]*' }, //disableUnderline: true ,
  InputLabelProps: { variant: 'calculator' },
  variant: 'standard',
  ...Input.defaultProps,
};
