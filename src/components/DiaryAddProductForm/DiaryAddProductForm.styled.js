import styled from '@emotion/styled';
import VerdanaBold from '../../fonts/VerdanaBold.ttf';

export const FormWrapper = styled.div`
  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const Form = styled.form`
  align-items: center;
  color: ${p => p.theme.palette.text.secondary};
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (max-width: 767px) {
    padding: 80px 15px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-family: ${VerdanaBold};
  font-style: normal;
  font-size: 14px;
  letter-spacing: 0.04em;
  line-height: 1.21;
  width: 285px;

  @media screen and (min-width: 768px) {
    width: 240px;
    margin-right: 48px;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 32px;
  }
`;

export const Input = styled.input`
  max-width: 280px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${p => p.theme.palette.input.primary};
  font-weight: 700;
  font-family: ${VerdanaBold};
  font-style: normal;
  font-size: 14px;
  letter-spacing: 0.04em;
  line-height: 1.21;
`;

export const Button = styled.button`
  padding: 8px;
  width: 48px;
  height: 48px;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  font-weight: 700;
  font-family: ${VerdanaBold};
  font-style: normal;
  font-size: 14px;
  letter-spacing: 0.04em;
  line-height: 1.21;
  border-radius: 30px;
  border: none;
  background-color: ${p => p.theme.palette.primary.main};
  color: ${p => p.theme.palette.primary.contrastText};
  cursor: pointer;
  :hover,
  :focus {
    box-shadow: 0px 15px 20px rgba(252, 132, 45, 0.4);
  }

  @media screen and (max-width: 767px) {
    margin-top: 60px;
    padding: 12px 46px;
    width: 176px;
  }
  @media screen and (min-width: 768px) {
    margin-right: 32px;
  }
`;
