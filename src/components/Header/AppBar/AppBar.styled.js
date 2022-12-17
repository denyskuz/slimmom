import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo/logo.png';
import logoDesk from '../../../images/logo/logoDesk.png';
import slim from '../../../images/logo/logoSlim.png';
import mom from '../../../images/logo/logoMom.png';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 16px;
  border-bottom: 2px solid;
  border-color: #e0e0e0;

  @media screen and (min-width: 1280px) {
    border-bottom: none;
    align-items: baseline;
    padding-top: 80px;
    padding-bottom: 0;
  }
`;

export const NavHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1280px) {
    justify-content: flex-start;
    align-items: baseline;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  @media screen and (max-width: 480px) {
    display: none;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    bottom: 0;
    left: 60px;
    border-right: 2px solid;
    border-color: #e0e0e0;
    padding-right: 20px;
  }
`;

export const LoggedWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 480px) {
    display: none;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    bottom: 0;
    left: 60px;
    border-right: 2px solid;
    border-color: #e0e0e0;
    padding-right: 20px;
  }
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-right: 330px;
  }

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
  height: 16px;
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
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* @media screen and (max-width: 1279px) {
        display: none;
    } */
`;
