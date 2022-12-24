import styled from '@emotion/styled';
import { ListItem } from '@mui/material';
import backgroundTablet from '../../images/background/sidebar-bg-tablet.png';
import backgroundDesktop from '../../images/background/sidebar-bg-desktop.png';

export const BadFoodContainer = styled.div`
  @media screen and (max-width: 320px) {
    margin-top: 40px;
  }
  @media screen and (min-width: 320px) and (max-width: 1280px) {
    margin-left: 79px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 60px;
  }
`;

export const BadFoodPlaceholder = styled.div`
  margin-top: 20px;
`;

export const SummaryTitle = styled.h3`
  color: #212121;
  margin-bottom: 20px;
`;

export const SideBarContainer = styled.div`
  font-family: Verdana;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  font-weight: 400;
  color: #9b9faa;
  background: #f0f1f3;
  width: 100%;
  display: flex;
  @media screen and (max-width: 320px) {
    padding: 40px 20px 24px 20px;
    flex-direction: column;
  }
  @media screen and (min-width: 320px) and (max-width: 1280px) {
    padding: 80px 80px 80px 32px;
  }
  @media (min-width: 768px) {
    background-image: url(${backgroundTablet});
    background-repeat: no-repeat;
    background-position: bottom 0 right 0;
    width: 768px;
    margin-right: auto;
    margin-left: auto;
  }
  @media screen and (min-width: 1280px) {
    background-image: url(${backgroundDesktop});
    background-repeat: no-repeat;
    background-position: bottom 0 right 0;
    display: grid;
    align-content: start;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 40%;
    padding-top: 292px;
  }
`;

export const SummaryListContainer = styled.div`
  margin-bottom: 20px;
`;

export const SummaryListItem = styled(ListItem)`
  display: flex;
  justify-content: space-between;
  & + & {
    margin-top: 28px;
  }
`;