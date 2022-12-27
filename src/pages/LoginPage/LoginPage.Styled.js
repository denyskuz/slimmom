import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 40px;
  padding-bottom: 175px;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 495px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 150px;
    padding-bottom: 255px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  color: #fc842d;
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
