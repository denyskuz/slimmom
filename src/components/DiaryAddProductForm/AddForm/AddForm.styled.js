import styled from 'styled-components';

export const Form = styled.div`
  position: relative;
  padding: 60px 0;
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 80px 20px;
  }
`;

export const ProductInput = styled.input`
  width: 240px;
  height: 37px;
  border: none;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  margin-right: 22px;
  margin-bottom: 8px;  
  font-family: Verdana;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  @media (max-width: 767px) {
    margin-bottom: 40px;
    margin-right: 0;
    width: 100%;
  }
`;

export const GramsInput = styled.input`
  width: 106px;
  height: 37px;
  border: none;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  margin-bottom: 8px;
  margin-right: 87px;
  font-family: Verdana;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-align: right;
  color: #9B9FAA;

  @media (min-width: 1280px) {
    margin-right: 60px;
  }

  @media (max-width: 1280px) {
    margin-right: 30px;
  }

  @media (max-width: 767px) {
    margin-bottom: 70px;
    width: 100%;
    margin-right: 0;
  }
`;
