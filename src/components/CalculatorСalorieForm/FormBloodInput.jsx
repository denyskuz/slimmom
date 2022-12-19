import { styled } from '@mui/system';
import { FormInput } from './FormInput';

export const FormBloodInput = styled(FormInput)(({ theme }) => ({
  '& .MuiInputBase-root': {
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '0.04em',
  },
  '& .MuiInputBase-input:focus': {
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down('mobile')]: {
    '.MuiInputBase-formControl': {
      visibility: 'hidden',
    },
    '.MuiInputLabel-shrink': {
      transform: `translate(0, ${theme.spacing(3)})`,
    },
  },
}));

FormBloodInput.defaultProps = {
  ...FormInput.defaultProps,
  inputProps: { maxLength: 1 },
};
