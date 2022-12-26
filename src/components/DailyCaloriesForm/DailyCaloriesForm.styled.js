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
  height: 100%;
  padding-top: 32px;

  @media (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 150px;
  }

  @media (min-width: 1280px) {
    padding-top: 137px;
    padding-bottom: 111px;
  }
`;

export const Title = styled.h1`
  font-family: Verdana;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: normal;
  margin: 0;
  margin-bottom: 32px;
  @media (min-width: 320px) {
    width: 280px;
  }
  @media (min-width: 767px) {
    width: 520px;
    font-size: 34px;
    margin-bottom: 68px;
  }
`;

export const Form = styled.form`
  display: grid;
  @media (max-width: 767.5px) {
    grid-auto-flow: row;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 240px);
    grid-template-rows: repeat(4, 4fr);
    column-gap: 32px;
    grid-auto-flow: column;
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
    margin: 0;
  }
`;

export const Input = styled(TextField)`
  & input {
    width: 240px;
    margin: 0;
    padding-top: 0;
    padding-bottom: 8px;
    font-family: Verdana;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
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
    margin: 0;
    text-align: right;
    font-family: Verdana;
    font-weight: 700;
    font-size: 10px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: #9b9faa;
  }
`;
export const ShiftedInput = styled(Input)`
  @media (max-width: 767.5px) {
    grid-column: 1;
  }
  grid-column: 2;
`;

export const BloodInput = styled(Input)`
  & input {
    pointer-events: none;
    @media (max-width: 320px) {
      visibility: hidden;
    }
  }
  & .MuiInputLabel-shrink {
    @media (max-width: 320px) {
      transform: translate(0, 20px);
    }
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
  @media (max-width: 767.5px) {
    grid-column: 1;
  }
  grid-column: 2;
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
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0.04em;
    background: #fc842d;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
    @media (min-width: 320px) {
      margin-top: 40px;
      justify-self: center;
    }

    @media (min-width: 768px) {
      margin-top: 20px;
      justify-self: center;
    }
  }
  &.MuiButtonBase-root:hover {
    background: #fff;
    color: #fc842d;
  }
    @media (max-width: 767.5px) {
    grid-row: 6 / span 1;
    grid-column: 1;
    justify-self: start;
    align-self: start;
  }

  @media (min-width: 768px) {
    grid-row: 4 / span 1;
    grid-column: 1;
    justify-self: start;
    align-self: start;
  }

  @media (min-width: 1280px) {
    align-self: start;
    justify-self: end;
    grid-row: 4 / span 1;
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
