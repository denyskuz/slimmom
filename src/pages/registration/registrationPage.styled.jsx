import styled from '@emotion/styled';

export const MainContainer = styled.div`

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 768px;
    padding-left: 16px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const RegisterContainer = styled.div`
  margin: 0 auto;
  padding: 120px 15px 99px 20px;
  width: 320px;
  text-align: center;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 768px;
    margin-left: 0;
    text-align: left;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
    text-align: left;
  }
`;

export const RegisterForm = styled.div`
  padding-top: 40px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 768px;
    margin-left: 0;
    text-align: left;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    margin-left: 0;
    text-align: left;
  }
`;

export const RegisterFormName = styled.h1`
  margin: 0;
  height: 12px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: #fc842d;
`;

export const RegisterButton = styled.button`
  margin-top: 60px;
  width: 182px;
  height: 44px;
  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border: 2px solid #fc842d;
  border-radius: 30px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #ffffff;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 32px;
  }
`;

export const LogInButton = styled.button`
  margin-top: 20px;
  width: 182px;
  height: 44px;
  background: #ffffff;
  border: 2px solid #fc842d;
  border-radius: 30px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #fc842d;
`;
