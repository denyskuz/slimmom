import styled from 'styled-components';
import { TextField } from '@mui/material';
import { ButtonPrimary } from 'components/Button/Button';

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
    grid-template-columns: repeat(2, 240px);
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
`;

export const Input = styled(TextField)`
  font-family: Verdana;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: normal;
  width: 100%;
  color: #9b9faa;
  & label {
    font-family: Verdana;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: normal;
    color: #9b9faa;
  }
  & p {
    text-align: right;
    font-family: Verdana;
    font-weight: 700;
    font-size: 10px;
    line-height: 17px;
    letter-spacing: normal;
    color: #9b9faa;
  }
  & label.Mui-focused {
    color: #fc842d;
  }
  & .MuiInput-underline:after {
    border-bottom-color: #fc842d;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
export const Button = styled(ButtonPrimary)`
  margin: 40px auto 0 auto;
  width: 210px;
  height: 43px;
  cursor: pointer;
  text-transform: none;
  @media (min-width: 768px) {
    margin: 0;
    grid-row: 4 / span 1;
  }

  @media (min-width: 1280px) {
    align-self: start;
    justify-self: end;
    grid-column: 2;
  }
`;
