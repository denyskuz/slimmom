import { styled } from '@mui/system';
import { FormControlLabel } from '@mui/material';

export const FormLabel = styled(FormControlLabel)(({ theme }) => ({
  '& .MuiSvgIcon-root': {
    height: 20,
    width: 20,
  },
  '& .MuiFormControlLabel-label': {
    fontWeight: 700,
  },
  '& .Mui-checked + .MuiFormControlLabel-label': {
    color: theme.palette.primary.main,
  },
  "& [data-testid='RadioButtonUncheckedIcon']": {
    color: theme.palette.primary.stroke,
  },
}));
