import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: calc(100% - 82px);
  padding-top: 40px;
  padding-bottom: 175px;

  @media screen and (min-width: 768px) {
    padding-top: 150px;
    padding-bottom: 280px;
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