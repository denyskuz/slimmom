import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo/logo.png';
import logoDesk from '../../../images/logo/logoDesk.png';
import slim from '../../../images/logo/logoSlim.png';
import mom from '../../../images/logo/logoMom.png';

export const Header = styled.header`
  display: block;
  /* justify-content: space-between; */
  align-items: center;
  border-bottom: 2px solid;
  border-color: #e0e0e0;

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

  @media screen and (min-width: 768px) {
    padding-right: 32px;
    padding-left: 32px;
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
    left: 60px;
    
    ::after{
    content: '';
    display: block;
    position: absolute;
    top: -7px;
    left: -20px;
    height: 32px;
    width: 2px;
    background-color: #e0e0e0;
    }
  }
`;

export const LoggedWrapper = styled.div`
  display: flex;

  @media screen and (min-width: 1280px) {
    position: absolute;
    bottom: 0;
    left: 60px;

    ::after{
    content: '';
    display: block;
    position: absolute;
    top: -5px;
    left: 130px;
    height: 32px;
    width: 2px;
    background-color: #e0e0e0;
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
  padding-right: 20px;
  padding-left: 20px;
  background-color: #eff1f3;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
