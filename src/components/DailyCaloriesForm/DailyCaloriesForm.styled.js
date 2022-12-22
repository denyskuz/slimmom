import { Box } from '@mui/material';
import styled from 'styled-components';
import {
  TextField,
  FormControlLabel,
  Button as MuiButton,
  RadioGroup,
  Radio,
} from '@mui/material';

export const FormWrapper = styled.div`
  width: 100%;
  padding: 32px 20px 110px;
  @media (min-width: 768px) {
    width: 80%;
    padding: 100px 32px;
  }
  @media (min-width: 1280px) {
    width: 60vw;
    padding: 100px 32px;
  }
`;

export const Title = styled.h1`
  font-family: Verdana;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.42;
  letter-spacing: normal;
  margin: 0;
  margin-bottom: 34px;
  @media (min-width: 768px) {
    font-size: 34px;
    margin-bottom: 68px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 240px);
    gap: 30px;
  }
`;

export const Label = styled(FormControlLabel)`
  font-family: Verdana;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  & .Mui-checked + .MuiFormControlLabel-label {
    font-weight: 700;
    color: #fc842d;
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
  & label {
    font-family: Verdana;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: #9b9faa;
    top: -20px;
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
  & label.Mui-focused {
    color: #fc842d;
  }
  & .MuiInput-underline:after {
    border-bottom-color: #fc842d;
  }
`;

export const BloodInput = styled(Input)`
  & input {
    pointer-events: none;
  }
  & .MuiInputLabel-shrink {
    transform: translate(0, 20px);
  }
  & label.Mui-focused {
    color: #9b9faa;
  }
  & .MuiInput-underline:after {
    border-bottom-color: #9b9faa;
  }
`;

export const FormRadioGroup = styled(RadioGroup)`
  justify-content: space-between;
`;

export const RadioButton = styled(Radio)`
  color: #e0e0e0;
  & span {
    & svg {
      height: 20px;
      width: 20px;
    }
  }
  &.Mui-checked {
    & span {
      color: #fc842d;
    }
  }
`;

export const Button = styled(MuiButton)`
  &.MuiButtonBase-root {
    padding: 13px 25px;
    border-radius: 30px;
    text-transform: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0.04em;
    background: #fc842d;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  }
  &.MuiButtonBase-root:hover {
    background: #fff;
    color: #fc842d;
  }
  @media (min-width: 768px) {
    grid-row: 4 / span 1;
  }
  @media (min-width: 1280px) {
    align-self: start;
    justify-self: end;
    grid-column: 2;
  }
`;

export const StyledModalBox = styled(Box)`
  width: 100%;
  height: 100%;
  background-color: #fff;
  @media (min-width: 768px) {
    width: 672px;
    height: 572px;
    padding: 0 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    boxshadow: 24;
    p: 3;
  }
`;
