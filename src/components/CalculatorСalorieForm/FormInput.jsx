import { styled } from '@mui/system';
import { TextField } from '@mui/material';

export const FormInput = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '0.04em',
  },
  '& .MuiInputBase-input:focus': {
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down('mobile')]: {
    '& + &, & + .MuiFormControl-root': {
      marginTop: 32 - 16 - 4,
    },
  },
  [theme.breakpoints.up('mobile')]: {
    '& + &, & + .MuiFormControl-root': {
      marginTop: 60 - 16 - 4,
    },
    minWidth: 240,
  },
  '.MuiInputLabel-formControl': {
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '0.04em',
  },
}));

FormInput.defaultProps = {
  inputProps: { maxLength: 3 },
  variant: 'standard',
  ...FormInput.defaultProps,
};
