import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 100%;
  padding-top: 150px;
  padding-bottom: 179px;
`;

export const Title = styled.h1`
  text-align: center;
  color: #fc842d;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    text-align: start;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 50px;
  }
`;
