import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const ButtonPrimary = styled(Button)`
  margin-top: 60px;
  width: 182px;
  background-color: ${props => props.theme.palette.primary.main};
  color: ${props => props.theme.palette.primary.contrastText};
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
    background-color: ${props => props.theme.palette.primary.contrastText};
    color: ${props => props.theme.palette.primary.main};
    border: 1px solid ${props => props.theme.palette.primary.contrastText};
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
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
  background-color: ${props => props.theme.palette.secondary.main};
  border-radius: 30px;
  border: 1px solid ${props => props.theme.palette.secondary.contrastText};
  color: ${props => props.theme.palette.secondary.contrastText};
  font-family: Verdana;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  &:hover {
    background-color: ${props => props.theme.palette.primary.contrastText};
    color: ${props => props.theme.palette.secondary.contrastText};
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

export const AddProductBtn = styled(Button)`
  padding: 0;
  min-width: 0px;
  display: flex;
  margin: 60px auto;
  border-radius: 50px;
  cursor: pointer;
  width: 48px;
  height: 48px;
  background: ${props => props.theme.palette.primary.main};
  border: none;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  color: white;
  font-size: 30px;
  transition: 0.4s;
  &:hover {
    transform: rotate(90deg);
    background: #fc832dbb;
  }
  @media (min-width: 768px) {
    margin: 0 0 0 87px;
  }
`;
