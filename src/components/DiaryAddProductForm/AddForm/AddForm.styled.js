import styled from 'styled-components';
import { Autocomplete, TextField } from '@mui/material';

export const Form = styled.form`
  position: relative;
  padding: 60px 0;
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 80px 20px;
  }
`;
export const Complete = styled(Autocomplete)`
  margin-right: 22px;
  width: 240px;
  border: none;
`;

export const ProductInput = styled(TextField)`
  font-size: 16px;
  outline: none;
  width: 240px;
  height: 37px;
  border: none;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  margin-right: 22px;
  @media (max-width: 767px) {
    margin-bottom: 40px;
    margin-right: 0;
    width: 100%;
  }
`;

export const GramsInput = styled(TextField)`
  font-size: 16px;
  outline: none;
  height: 37px;
  width: 106px;
  border: none;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  margin-right: 87px;
  :placeholder {
    text-align: right;
  }

  @media (min-width: 1200px) {
    margin-right: 60px;
  }

  @media (max-width: 540px) {
    margin-right: 30px;
  }

  @media (max-width: 480px) {
    margin-bottom: 70px;
    width: 100%;
    margin-right: 0;
  }
`;
