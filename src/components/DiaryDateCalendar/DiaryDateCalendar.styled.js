import styled from 'styled-components';

export const DiaryDate = styled.div`
  margin: 40px auto 32px auto;
  width: 150px;
  font-family: Verdana;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #212121;

  @media screen and (min-width: 768px) {
    margin: 0;
    margin-bottom: 60px;
    margin-top: 100px;
    font-size: 34px;
    line-height: 41px;
  }
`;
