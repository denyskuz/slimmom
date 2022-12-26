import styled from 'styled-components';

export const Wrapper = styled.div`
  height: calc(100% - 122px);

  @media screen and (min-width: 1280px) {
    height: calc(100% - 162px);
  }
`;

export const BlockContainer = styled.div`
  padding-top: 40px;
  height: 300px;

  @media screen and (min-width: 768px) {
    height: 605px;
    padding-top: 100px;
    padding-bottom: 55px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 137px;
    height: 690px;
  }
`;
