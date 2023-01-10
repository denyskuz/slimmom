import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
export const ModalDiaryStyled = styled(Box)`
  padding: 20px;
  width: 450px;
  height: 200px;
  background-color: ${prop=>prop.theme.palette.background.paper};
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
    background-color: ${prop => prop.theme.palette.background.paper};
    color: ${prop => prop.theme.borders.accent};
    border: 1px solid ${prop => prop.theme.palette.primary.main};
    box-shadow: none;
  }
  @media screen and (min-width: 768px) {
    &:first-of-type {
      margin-bottom: 0px;
    }
  }
`;
export const ModalTextDiary = styled(Typography)`
  color: ${prop => prop.theme.palette.text.primary};
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
