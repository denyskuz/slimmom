import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BurgerButton = styled.button`
  display: block;
  float: left;
  outline: 0;
  border: 0;
  margin-left: 0;
  padding: 0;
  background: none;

  @media screen and (min-width: 768px) {
    z-index: 10;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }

  &.active {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(9px, 9px);
      width: 24px;
      height: 5px;
      margin-bottom: 5px;
    }

    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none;
    }

    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(3px, -3px);
      width: 24px;
      height: 5px;
      margin-bottom: 5px;
    }
  }
`;

export const BurgerMenu = styled.nav`
    position: fixed;
    top: 80px;
    right: -105%;
    padding-top:  ${prop => prop.theme.spaceForm[3]}px;
    display: flex;
    flex-flow: column;
    width: 100vw;
    height: 105%;
    overflow-y: auto;
    background-color: ${prop => prop.theme.colors.bcgBurger};
    z-index: 100;
    transition: 0.8s;

  @media screen and (min-width: 1280px) {
    display: none;
  }

  &.open {
    right: 0;
    transition: 0.4s;
  }
`;

export const NavDiaryLink = styled(NavLink)`
  padding: ${prop => prop.theme.spaceForm[1]}px;
  font-family: Verdana;
  font-weight: ${prop => prop.theme.fontWeights.bold};
  font-size: ${prop => prop.theme.fontSizes.s};
  line-height: 1.2;
  letter-spacing: 0.04em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: ${prop => prop.theme.colors.secondary};

  @media screen and (min-width: 768px) {
    padding-top: 100px;
    font-size: 24px;
  }

  &.active {
    color: ${prop => prop.theme.colors.white};
  }
`;

export const NavCalcLink = styled(NavLink)`
  padding: ${prop => prop.theme.spaceForm[1]}px;
  font-family: Verdana;
  font-weight: ${prop => prop.theme.fontWeights.bold};
  font-size: ${prop => prop.theme.fontSizes.s};
  line-height: 1.2;
  letter-spacing: 0.04em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: ${prop => prop.theme.colors.secondary};

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  &.active {
    color: ${prop => prop.theme.colors.white};
  }
`;
