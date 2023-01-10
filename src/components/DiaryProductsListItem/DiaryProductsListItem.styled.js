import styled from '@emotion/styled';
import { Typography, FormGroup, Checkbox } from '@mui/material';
import { ImCross } from 'react-icons/im';

export const ProductCheckboxGroup = styled(FormGroup)`
  margin-bottom: 20px;
`;

export const ProductCheckbox = styled(Checkbox)`
  color: #e0e0e0;
  &.Mui-checked {
    color: #fc842d;
  }
`;

export const Box = styled.ul`
  margin: 60px auto 0;
  padding: 0;
  width: 290px;
  max-height: 200px;
  @media screen and (min-width: 768px) {
    width: 610px;
    max-height: 439px;
    margin: 0;
    padding-top: 60px;
    padding-bottom: 55px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  overflow-y: scroll;
  list-style: none;

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
    background: ${prop => prop.theme.palette.burger.primary};
    height: 40px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover:focus {
    background: ${prop => prop.theme.palette.primary.main};
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
  border-bottom: 2px solid ${prop => prop.theme.palette.text.secondary};
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
  border-bottom: 2px solid ${prop => prop.theme.palette.text.secondary};
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
  border-bottom: 2px solid ${prop => prop.theme.palette.text.secondary};
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
  color: ${prop => prop.theme.palette.text.secondary};
`;
