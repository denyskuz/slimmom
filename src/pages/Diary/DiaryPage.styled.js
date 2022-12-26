import styled from 'styled-components';

export const Wrapper = styled.div`
  height: calc(100% - 122px);

  @media screen and (min-width: 1280px) {
    height: calc(100% - 162px);
  }
`;

export const BlockContainer = styled.div`
  padding-top: 40px;
  padding-left: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
    padding-left: 32px;
    padding-right: 32px;
    width: 768px;
    margin-right: auto;
    margin-left: auto;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-top: 145px;
    padding-left: 16px;
    margin: 0;
  }
`;