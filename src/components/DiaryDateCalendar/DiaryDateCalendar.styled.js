import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const DiaryDate = styled.span`
  margin-bottom: 32px;
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
    margin-bottom: 60px;
    font-size: 34px;
    line-height: 41px;
  }
`;

export const Outline = styled(TextField)`
  & .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border: 0px;
  }
`;
