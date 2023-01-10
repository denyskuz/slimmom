import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 280px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: ${prop => prop.theme.palette.text.secondary};
  @media screen and (min-width: 768px) {
    max-width: 240px;
    margin: 0;
  }
`;

export const ButtonBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 396px;
    justify-content: baseline;
    flex-direction: initial;
  }
`;
export const Input = styled(TextField)`
  & input {
    padding-bottom: 20px;
    padding-top: 20px;
    font-family: Verdana;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    width: 100%;
    color: ${prop => prop.theme.palette.text.secondary};
  }
  & input:-webkit-autofill,
  & input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  & .MuiInput-underline:after {
    border-bottom-color: ${prop => prop.theme.palette.primary.main};
  }
  & label {
    padding-top: 20px;
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
  & p {
    text-align: right;
    font-family: Verdana;
    font-weight: 700;
    font-size: 10px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: ${prop => prop.theme.palette.text.secondary};
  }
`;
