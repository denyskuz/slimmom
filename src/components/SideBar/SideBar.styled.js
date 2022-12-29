import styled from '@emotion/styled';
import { ListItem } from '@mui/material';
import backgroundTablet from '../../images/background/leafsTabSideBar.png';
import backgroundDesktop from '../../images/background/leafsDeskSideBar.png';

export const BadFoodContainer = styled.div`
  margin-top: 40px;
  max-width: 450px;
  overflow: auto;

  @media screen and (min-width: 1280px) {
    margin-top: 60px;
    margin-left: 0;
  }
`;

export const BadFoodPlaceholder = styled.div`
  margin-top: 20px;
`;

export const SummaryTitle = styled.h3`
  margin-bottom: 20px;
  font-family: Verdana;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: #212121;
`;

export const SummaryTitleDark = styled.h3`
  margin-bottom: 20px;
  font-family: Verdana;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: #fc842d;
`;

export const BgWrapper = styled.div`
  background: #f0f1f3;
  @media (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    padding-right: auto;
    padding-left: auto;
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 40%;
  }
`;

export const SideBarContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 40px 20px 52px 20px;
  font-family: Verdana;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: #9b9faa;
  background: #f0f1f3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (min-width: 768px) {
    padding: 80px 32px;
    background-image: url(${backgroundTablet});
    background-repeat: no-repeat;
    background-position: bottom 0 right 0;
    bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${backgroundDesktop});
    background-repeat: no-repeat;
    background-position: top 0 right 0;
    display: flex;
    align-content: start;
    justify-content: stretch;
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    padding: 15% 100px;
    padding-bottom: 100px;
  }
`;
export const SideBarContainerDark = styled.div`
  width: 100%;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 40px 20px 52px 20px;
  font-family: Verdana;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: #9b9faa;
  /* background: #f0f1f3; */
  @media (max-width: 767px) {
    max-width: 360px;
    margin: 0 auto;
    flex-direction: row;
    align-items: baseline;
  }
  @media (min-width: 768px) {
    display: flex;
    padding: 80px 32px;
    background-image: url(${backgroundTablet});
    background-repeat: no-repeat;
    background-position: bottom 0 right 0;
    bottom: 0;
  }
  @media screen and (min-width: 1280px) {
    background-image: url(${backgroundDesktop});
    background-repeat: no-repeat;
    background-position: top 0 right 0;
    display: grid;
    align-content: start;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    padding: 292px 94px 0 0;
  }
`;

export const SummaryListContainer = styled.div`
  margin-bottom: 20px;
`;

export const SummaryListItem = styled(ListItem)`
  display: flex;
  justify-content: space-between;
  :not(:last-child) {
    margin-bottom: 10px;
  }
  & + & {
    margin-top: 2px;
  }
`;
