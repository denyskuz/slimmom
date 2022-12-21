import styled from '@emotion/styled';

export const MainContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
