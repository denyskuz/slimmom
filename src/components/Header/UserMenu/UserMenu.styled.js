import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FiCornerDownLeft } from 'react-icons/fi';

export const List = styled.div`
  display: none;

  @media only screen and (min-width: 1280px) {
    display: flex;
    margin-right: 550px;
  }
`;

export const ListItem = styled(NavLink)`
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: Gotham Pro;
  font-size: 14px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0.04em;
  text-decoration: none;
  text-transform: uppercase;
  color: #9b9faa;

  :first-child {
    margin-right: 16px;
  }

  :hover {
    color: #fc842d;
  }

  &.active {
    color: #212121;
  }
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  height: 40px;
`;

export const UserName = styled.h2`
  display: inline;
  font-family: Gotham Pro;
  font-size: 14px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0.04em;
  margin: 0;
  padding: 15px 16px 13px 0;
  border-right: 2px solid;
  border-color: #e0e0e0;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;

  &:hover {
    color: #fc842d;
  }
`;

export const Arrow = styled(FiCornerDownLeft)`
  @media only screen and (min-width: 768px) {
    display: none;
    visibility: hidden;
  }
`;

export const UserExitButton = styled.button`
  font-family: Gotham Pro;
  font-size: 14px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  border: none;
  background-color: transparent;
  padding: 15px 0 13px 16px;
  cursor: pointer;

  &:hover {
    color: #fc842d;
  }
`;
