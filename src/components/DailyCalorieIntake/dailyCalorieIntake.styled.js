import styled from 'styled-components';
import Close from '../../images/icon/Close.svg';
import Close_mobile from '../../images/icon/Close_mobile.svg';
import { Button } from '@mui/material';

export const IntakeBar = styled.div`
  height: 40px;
  margin: 0 -20px;
  text-align: left;
  padding-left: 20px;
  @media (min-width: 768px) {
    text-align: right;
  }
`;

export const CloseButton = styled(Button)`
  width: 40px;
  min-width: 40px !important;
  height: 40px;
  border: none;
  background: url(${Close_mobile}) no-repeat center;
  @media (min-width: 768px) {
    background: url(${Close}) no-repeat center;
  }
`;
export const TitleWrapper = styled.div`
  text-align: left;
  padding-top: 40px;
  width: 280px;
  margin: auto;
`;

export const IntakeTitle = styled.h2`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
`;

export const IntakeResult = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  letter-spacing: 0.04em;
`;

export const ListWrapper = styled.div`
  max-width: 280px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  border-top: 1px solid #e0e0e0;
  @media (min-width: 768px) {
    width: 330px;
  }
  nav div[class*='MuiCollapse-vertical'] span {
    font-size: 12px;
  }
  div[id='scrollableDiv'] {
    height: 150px !important;
  }
`;

export const ListTitle = styled.h3`
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #212121;
`;

export const List = styled.div`
  overflow: auto;
`;

export const ButtonStart = styled.button`
  margin: 40px auto 0 auto;
  width: 210px;
  height: 43px;
  background-color: #fc842d;
  color: #ffffff;
  display: block;
  font-family: Verdana;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;

  &:hover,
  &:focus {
    background-color: #ffffff;
    color: #fc842d;
  }
`;
