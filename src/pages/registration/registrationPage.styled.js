import styled from '@emotion/styled';
import backgroundTablet from '../../images/background/background-tablet.png';
import backgroundDesktop from '../../images/background/background-desktop.png';

export const Wrapper = styled.div`
  height: 100vh;

  @media (min-width: 767px) {
    background: url(${backgroundTablet}) no-repeat bottom 0 right 0;
  }
  @media (min-width: 1280px) {
    background: url(${backgroundDesktop}) no-repeat bottom 0 right 0;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 40px;
  color: #fc842d;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    text-align: start;
    margin-left: 32px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 16px;
  }
`;
