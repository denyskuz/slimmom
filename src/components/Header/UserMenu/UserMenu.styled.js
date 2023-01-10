import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { FiCornerDownLeft } from 'react-icons/fi';

export const List = styled.div`
  display: none;

  @media only screen and (min-width: 1280px) {
    display: flex;
  }
`;

export const ListItem = styled(NavLink)`
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: GothamPro-Bold;
  font-size: 14px;
  font-weight: 700;
  line-height: 0.93;
  letter-spacing: 0.04em;
  text-decoration: none;
  text-transform: uppercase;
  color: ${prop => prop.theme.palette.text.secondary};

  :first-of-type {
    margin-right: ${prop => prop.theme.space[4]}px;
  }

  :hover {
    color: ${prop => prop.theme.palette.primary.main};
  }

  &.active {
    color: ${prop => prop.theme.palette.text.primary};
  }
`;

export const UserInfoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;

  @media screen and (min-width: 768px) {
    margin-right: 50px;
  }
  @media screen and (min-width: 1280px) {
    margin: 0;
  }
`;

export const UserName = styled.span`
  position: relative;
  display: inline;
  font-family: GothamPro-Bold;
  font-size: 14px;
  font-weight: 700;
  line-height: 0.93;
  letter-spacing: 0.04em;
  margin: 0;
  padding: 15px 16px 13px 0;
  color: ${prop => prop.theme.palette.text.secondary};

  ::after {
    content: '';
    display: block;
    position: absolute;
    top: 5px;
    right: 0;
    height: 32px;
    width: 2px;
    background-color: ${prop => prop.theme.palette.input.primary};
  }

  @media screen and (min-width: 768px) {
    color: ${prop => prop.theme.palette.text.primary};
  }
`;

export const LinkToCalc = styled(NavLink)`
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;

  &:hover {
    color: ${prop => prop.theme.palette.primary.main};
  }

  &.active {
    opacity: 0;
  }
`;

export const Arrow = styled(FiCornerDownLeft)`
  @media only screen and (min-width: 768px) {
    display: none;
    visibility: hidden;
  }
`;

export const UserExitButton = styled.button`
  font-family: GothamPro-Bold;
  font-size: 14px;
  font-weight: 700;
  line-height: 0.93;
  letter-spacing: 0.04em;
  color: ${prop => prop.theme.palette.text.secondary};
  border: none;
  background-color: transparent;
  padding: 15px 0 13px 16px;
  cursor: pointer;

  &:hover {
    color: ${prop => prop.theme.palette.primary.main};
  }
`;
