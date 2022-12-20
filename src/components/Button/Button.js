import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const ButtonPrimary = styled(Button)`
  margin-top: 60px;
  width: 182px;
  background-color: #fc842d;
  color: #fff;
  height: 44px;
  border-radius: 30px;
  border: 0px;
  font-family: Verdana;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  &:hover {
    background-color: #fff;
    color: #fc842d;
    border: 2px solid #fc842d;
    box-shadow: none;
  }
  @media screen and (min-width: 768px) {
    margin-right: 32px;
  }
`;
export const ButtonSecondary = styled(Button)`
  margin-top: 20px;
  padding: 0px;
  width: 182px;
  height: 44px;
  background-color: #fff;
  border-radius: 30px;
  border: 2px solid #fc842d;
  color: #fc842d;
  font-family: Verdana;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  &:hover {
    background-color: #fc842d;
    color: #fff;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
    border: 0px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
`;

export const LinkButton = styled(NavLink)`
  padding: 13px;
  width: 182px;
  height: 44px;
  border-radius: 30px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  &:hover {
    background-color: inherit;
    color: inherit;
  }
`;
