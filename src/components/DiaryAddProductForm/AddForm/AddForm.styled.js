import styled from '@emotion/styled';
import { Autocomplete, TextField } from '@mui/material';

export const Form = styled.form`
  width: 300px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px auto 0px;
  @media (min-width: 768px) {
    height: 48px;
    flex-direction: row;
    padding: 80px 20px;
    width: 550px;
    padding: 0px;
    margin: 0px;
  }
`;

export const Complete = styled(Autocomplete)`
  width: 280px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    width: 240px;
    margin-right: 22px;
    margin-bottom: 0px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 48px;
  }
  & .MuiInputLabel-outlined:not(.MuiInputLabel-shrink) {
    transform: 'translate(34px, 20px) scale(1);';
    top: 8px;
    left: -14px;
  }
  & .MuiAutocomplete-inputRoot {
    & .MuiOutlinedInput-notchedOutline {
      border: none;
      height: 53px;
      border-radius: 0px;
      border-bottom: 1px solid ${prop => prop.theme.palette.text.secondary};
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-bottom-color: ${prop => prop.theme.palette.primary.main};
    }
  }
`;

export const ProductInput = styled(TextField)`
  outline: none;
  width: 240px;
  height: 37px;
  border: none;

  & label {
    font-family: Verdana;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: ${prop => prop.theme.palette.text.secondary};
    padding: 0;
  }
  & label.Mui-focused {
    color: ${prop => prop.theme.palette.primary.main};
    left: -14px;
  }
  @media (max-width: 767px) {
    margin-bottom: 40px;
    margin-right: 0;
    width: 100%;
  }
`;

export const GramsInput = styled(TextField)`
  outline: none;
  height: 37px;
  width: 280px;
  border: none;
  & .MuiInput-underline:after {
    border-bottom-color: ${prop => prop.theme.palette.primary.main};
  }
  & label {
    font-family: Verdana;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: ${prop => prop.theme.palette.text.secondary};
  }
  & label.Mui-focused {
    color: ${prop => prop.theme.palette.primary.main};
  }
  @media (min-width: 768px) {
    width: 106px;
    margin-bottom: 0px;
    & label {
    }
  }
`;
