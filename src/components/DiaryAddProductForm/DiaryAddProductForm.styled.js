import styled from 'styled-components';
import VerdanaBold from '../../fonts/VerdanaBold.ttf';

export const FormWrapper = styled.div`
  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const Form = styled.form`
  align-items: center;
  color: ${p => p.theme.colors.secondary};
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
  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: ${VerdanaBold};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;
  line-height: 1.21;
  width: 285px;

  @media screen and (min-width: 768px) {
    width: 240px;
    margin-right: ${p => p.theme.space[3] * 6}px;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 32px;
  }
`;

export const Input = styled.input`
  max-width: 280px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${p => p.theme.colors.input};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: ${VerdanaBold};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;
  line-height: 1.21;
`;

export const Button = styled.button`
  padding: ${p => p.theme.space[3]}px;
  width: ${p => p.theme.space[3] * 6}px;
  height: ${p => p.theme.space[3] * 6}px;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: ${VerdanaBold};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;
  line-height: 1.21;
  border-radius: ${p => p.theme.radii.button};
  border: none;
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
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
    margin-right: ${p => p.theme.space[5]}px;
  }
`