import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Link = styled(NavLink)`
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

  &:last-child {
    margin-left: ${prop => prop.theme.space[4]}px;
  }

  &:hover,
  &:focus {
    color: ${prop => prop.theme.palette.primary.main};
  }

  &.active {
    color: ${prop => prop.theme.palette.text.primary};
  }

  @media screen and (max-width: 349.5px) {
    font-size: 12px;

    &:last-child {
      margin-left: 10px;
    }
  }
`;

export const LangButton = styled.button`
  cursor: pointer;
  width: 20px;
  height: 20px;
  border: none;
  margin-right: 5px;
  background-color: transparent;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: baseline;
  padding-top: 8px;
  margin-right: 10px;

  @media screen and (max-width: 767.5px) {
    padding-top: 2px;
    margin-right: 15px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 10px;
  }
`;

export const Lang = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  position: relative;
  left: 0;
  display: none;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const LangItem = styled.option``;
