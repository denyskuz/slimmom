import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 55px;
  max-width: 280px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #9b9faa;
  @media screen and (min-width: 768px) {
    max-width: 380px;
    margin-left: 32px;
  }
  @media screen and (min-width: 1024px) {
    margin-left: 16px;
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
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #9b9faa;
  @media screen and (min-width: 768px) {
    width: 240px;
  }
  @media screen and (min-width: 1024px) {
    width: 240px;
  }
  & label.Mui-focused {
    color: #9b9faa;
  }
  & .MuiInput-underline:after {
    border-bottom-color: #fc842d;
  }
`;
