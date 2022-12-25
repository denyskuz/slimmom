import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 60px;
  max-width: 280px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #9b9faa;
  @media screen and (min-width: 768px) {
    max-width: 380px;
    margin: 0;
  }
`;

export const ButtonBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    justify-content: baseline;
    flex-direction: initial;
  }
`;
export const Input = styled(TextField)`
  & input {
    font-family: Verdana;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    width: 100%;
    color: #9b9faa;
  }
  & input:-webkit-autofill,
  & input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  & .MuiInput-underline:after {
    border-bottom-color: #fc842d;
  }
  & label {
    font-family: Verdana;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: #9b9faa;
  }
  & label.Mui-focused {
    color: #fc842d;
  }
  & p {
    text-align: right;
    font-family: Verdana;
    font-weight: 700;
    font-size: 10px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: #9b9faa;
  }
`;
