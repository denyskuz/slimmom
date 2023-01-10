import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 40px;
  padding-bottom: 99px;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 419px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 150px;
    padding-bottom: 179px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 40px;
  text-align: center;
  color: ${prop => prop.theme.palette.primary.main};
  font-family: GothamPro-Bold;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    text-align: start;
  }
`;
