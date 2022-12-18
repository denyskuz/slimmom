import { styled } from '@mui/system';
import { TextField } from '@mui/material';

export const Input = styled(TextField, {
  shouldForwardProp: props => props !== 'bloodType',
})(({ theme, bloodType }) => ({
  marginTop: theme => theme.spacing(2),
  maxWidth: '100%',
  '.MuiInputLabel-formControl': {
    fontWeight: 700,
    lineHeight: 1.2,
  },
  [theme.breakpoints.down('mobile')]: {
    ...(bloodType && {
      '.MuiInputBase-formControl': {
        visibility: 'hidden',
      },
      '.MuiInputLabel-shrink': {
        transform: 'translate(0, 20px)',
      },
    }),
  },
}));

Input.defaultProps = {
  InputProps: { inputMode: 'numeric', pattern: '[0-9]*' }, //disableUnderline: true ,
  variant: 'standard',
  ...Input.defaultProps,
};
