import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
export const ModalDiaryStyled = styled(Box)`
  padding: 20px;
  width: 450px;
  height: 200px;
  background-color: #fff;
  border-radius: 8px;
`;
export const ButtonModalDiary = styled(Button)`
  width: 182px;
  height: 44px;
  border-radius: 30px;
  &:first-of-type {
    margin-bottom: 10px;
  }
  &.MuiButton-contained:hover {
    background-color: #fff;
    color: #fc842d;
    border: 1px solid #fc842d;
    box-shadow: none;
  }
  @media screen and (min-width: 768px) {
    &:first-of-type {
      margin-bottom: 0px;
    }
  }
`;
export const ModalTextDiary = styled(Typography)`
  color: #000;
  text-align: center;
  margin: 20px auto 20px;
  font-size: large;
`;
export const ButtonBox = styled(Box)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    justify-content: space-around;
    flex-direction: initial;
  }
`;
