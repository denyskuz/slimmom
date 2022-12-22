import { Box } from '@mui/material';
import styled from 'styled-components';
import { TextField } from '@mui/material';

export const FormWrapper = styled.div`
  width: 80%;
  padding: 32px 0px 110px;

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
  line-height: 25px;
  letter-spacing: normal;
  margin: 0;
  margin-bottom: 34px;

  @media (min-width: 768px) {
    font-size: 34px;
    line-height: 47px;
    margin-bottom: 68px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 100px);
    gap: 30px;
  }
`;

export const Label = styled.label`
  font-family: Verdana;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: normal;
  color: #9b9faa;
  margin-bottom: 8px;
  padding-top: 28px;
`;

export const Input = styled(TextField)`
  font-family: Verdana;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: normal;
  width: 100%;
  color: #9b9faa;
  margin-bottom: 32px;
  border: none;
  background-color: transparent;
  & label {
    font-family: Verdana;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: normal;
    color: #9b9faa;
  }
  & label.Mui-focused {
    color: #9b9faa;
  }
  & .MuiInput-underline {
    border-bottom-color: #e0e0e0;
  }
  & .MuiInput-underline:after {
    border-bottom-color: #fc842d;
  }
`;

export const RadioGroup = styled.div`
  margin-top: 20px;
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

export const Radio = styled.input`
  position: relative;
  height: 20px;
  width: 20px;
  margin-right: 4px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transform: translate(-50%, -30%);
    background-color: white;
    border: 1px solid #9b9faa;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fc842d;
    transform: translate(-50%, -12%);
    visibility: visible;
  }
`;

export const Button = styled.button`
  margin: 40px auto 0 auto;
  width: 210px;
  height: 43px;
  background-color: #fc842d;
  color: #ffffff;
  display: block;
  font-family: Verdana;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;

  @media (min-width: 768px) {
    margin: 60px 0 0 0;
    grid-row: 4 / span 1;
  }

  @media (min-width: 1280px) {
    grid-column: 2 / 3;
    margin: 0 auto 20px auto;
  }
  &:hover {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const Error = styled.div`
  position: relative;

  left: 0;
  width: 150px;
  width: 100px;
  color: red;
  font-size: 12px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
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
