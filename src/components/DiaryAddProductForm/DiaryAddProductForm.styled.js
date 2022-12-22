import { Box } from '@mui/material';
import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 80%;
    padding: 100px 32px;
  }

  @media (min-width: 1280px) {
    width: 60vw;
    padding: 100px 32px;
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
`;

export const Input = styled.input`
  font-family: Verdana;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: normal;
  width: 100%;
  color: #9b9faa;
  margin-bottom: 32px;
  border: none;
  border-bottom: 1px solid #9b9faa;
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