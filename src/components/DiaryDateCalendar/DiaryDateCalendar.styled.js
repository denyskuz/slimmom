import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const DiaryDate = styled.div`
  margin: 40px auto 32px auto;
  width: 150px;
  font-family: Verdana;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #212121;
  border: none;

  @media screen and (min-width: 768px) {
    margin: 0;
    margin-bottom: 60px;
    margin-top: 100px;
    font-size: 34px;
    line-height: 41px;
  }
`;

export const Outline = styled(TextField)`
  & .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border: 0px;
  }
`;
