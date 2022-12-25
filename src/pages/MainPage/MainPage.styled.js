import styled from '@emotion/styled';
import backgroundTablet from '../../images/background/background-tablet.png';
import backgroundDesktop from '../../images/background/background-desktop.png';

export const Wrapper = styled.div`
  height: calc(100vh - 82px);

  @media (min-width: 767px) {
    background: url(${backgroundTablet}) no-repeat bottom 0 right 0 / 100% 60%;
  }
  @media (min-width: 1280px) {
    background: url(${backgroundDesktop}) no-repeat bottom 0 right 0 / 60% 100%;
    height: calc(100vh - 158px);
  }
`;
