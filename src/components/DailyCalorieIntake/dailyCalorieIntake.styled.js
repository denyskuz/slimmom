import styled from 'styled-components';
import Close from '../../images/icon/Close.svg';
import Close_mobile from '../../images/icon/Close_mobile.svg';
import { Button } from '@mui/material';

export const IntakeWrapper = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    width: 672px;
    height: 572px;
    padding: 0 20px;
    background-color: #fff;
  }
`;

export const IntakeBar = styled.div`
  height: 40px;
  margin: 0 -20px;
  background: #eff1f3;
  text-align: left;
  @media (min-width: 768px) {
    text-align: right;
    background-color: #fff;
  }
`;

export const CloseButton = styled(Button)`
  width: 20px;
  height: 40px;
  border: none;
  background: url(${Close_mobile}) no-repeat bottom 16px left 20px #eff1f3;
  @media (min-width: 768px) {
    background: url(${Close}) no-repeat top 15px right 20px;
  }
`;

export const TitleWrapper = styled.div`
  text-align: left;
  width: 280px;
  margin: auto;
`;

export const IntakeTitle = styled.h2`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
  color: #212121;
`;

export const IntakeResult = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  letter-spacing: 0.04em;
  color: #264061;
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
`;

export const ListTitle = styled.h3`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #212121;
`;

export const List = styled.ol`
  padding-left: 20px;
`;

export const ListItem = styled.li`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
`;
