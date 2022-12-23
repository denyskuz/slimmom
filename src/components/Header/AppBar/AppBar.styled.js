import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo/logo.png';
import logoDesk from '../../../images/logo/logoDesk.png';
import slim from '../../../images/logo/logoSlim.png';
import mom from '../../../images/logo/logoMom.png';

export const Header = styled.header`
  border-bottom: ${prop => prop.theme.borders.line};
  border-color: ${prop => prop.theme.colors.input};

  @media screen and (min-width: 1280px) {
    border-bottom: none;
    align-items: baseline;
  }
`;

export const NavHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 16px 20px;

  max-width: 1280px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding-right: ${prop => prop.theme.space[5]}px;
    padding-left: ${prop => prop.theme.space[5]}px;
  }

  @media screen and (min-width: 1280px) {
    justify-content: flex-start;
    align-items: baseline;
    padding: 80px 16px 0 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;

  @media screen and (max-width: 767.5px) {
    display: none;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    bottom: 0;
    left: ${prop => prop.theme.spaceForm[3]}px;

    ::after {
      content: '';
      display: block;
      position: absolute;
      top: -5px;
      left: 130px;
      height: ${prop => prop.theme.space[5]}px;
      width: ${prop => prop.theme.space[1]}px;
      background-color: ${prop => prop.theme.colors.input};
    }
  }
`;

export const LoggedWrapper = styled.div`
  display: flex;

  @media screen and (min-width: 1280px) {
    position: absolute;
    bottom: 0;
    left: ${prop => prop.theme.spaceForm[3]}px;

    ::after {
      content: '';
      display: block;
      position: absolute;
      top: -5px;
      left: 130px;
      height: ${prop => prop.theme.space[5]}px;
      width: ${prop => prop.theme.space[1]}px;
      background-color: ${prop => prop.theme.colors.input};
    }
  }
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;

  @media only screen and (min-width: 1280px) {
    position: relative;
    margin-right: 130px;
  }
`;

export const Navigation = styled.div`
  display: flex;

  @media only screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
  }
`;

export const Logo = styled.div`
  width: 46.67px;
  height: 44px;
  margin-right: 10px;
  background-image: url(${logo});
  background-size: cover;

  @media screen and (min-width: 1280px) {
    height: 66px;
    width: 70.25px;
    background-image: url(${logoDesk});
  }
`;

export const LogoSlim = styled.span`
  width: 48px;
  height: ${prop => prop.theme.space[4]}px;
  margin-right: 6px;
  background-image: url(${slim});
  background-size: cover;
`;

export const LogoMom = styled.span`
  width: 52.2px;
  height: 15.4px;
  background-image: url(${mom});
  background-size: cover;
`;

export const UserMenuWrapperDesk = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 50px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 0;
  }
`;

export const UserMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: ${prop => prop.theme.spaceForm[1]}px;
  padding-left: ${prop => prop.theme.spaceForm[1]}px;
  background-color: ${prop => prop.theme.colors.bcgUserInfo};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
