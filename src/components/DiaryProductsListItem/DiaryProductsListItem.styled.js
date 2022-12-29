import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { ImCross } from 'react-icons/im';

export const List = styled.ul`
  overflow-y: scroll;
  list-style: none;
  margin: 60px auto 0;
  padding: 0;
  width: 290px;
  height: 200px;
  @media screen and (min-width: 768px) {
    width: 610px;
    height: 439px;
    margin: 0;
    padding-top: 60px;
    padding-bottom: 55px;
  }
  &::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
    border-color: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #264061;
    height: 40px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover:focus {
    background: #fc842d;
  }
`;

export const ListItems = styled.li`
  display: flex;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
`;

export const NameProduct = styled(Typography)`
  margin-right: 8px;
  padding-bottom: 8px;
  width: 130px;
  height: 24px;
  border-bottom: 2px solid #9b9faa;
  @media screen and (min-width: 768px) {
    width: 240px;
    height: 36px;
    padding-bottom: 20px;
    margin-right: 22px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 48px;
  }
`;
export const DataProduct = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    margin-right: 30px;
  }
`;
export const Weight = styled(Typography)`
  text-align: end;
  margin-right: 8px;
  width: 49px;
  height: 24px;
  border-bottom: 2px solid #9b9faa;
  @media screen and (min-width: 768px) {
    width: 106px;
    height: 36px;
    padding-bottom: 20px;
    margin-right: 46px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 32px;
  }
`;
export const Kcal = styled(Typography)`
  text-align: end;
  width: 58px;
  height: 24px;
  border-bottom: 2px solid #9b9faa;
  @media screen and (min-width: 768px) {
    width: 106px;
    height: 36px;
    padding-bottom: 20px;
  }
`;
export const DeleteButton = styled.button`
  cursor: pointer;
  margin-right: 10px;
  border: none;
  width: 20px;
  height: 20px;
  background-color: transparent;
`;
export const IconCross = styled(ImCross)`
  color: #9b9faa;
`;
