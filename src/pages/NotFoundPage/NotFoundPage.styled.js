import { NavLink } from 'react-router-dom';
import { keyframes } from 'styled-components';
import styled from '@emotion/styled';
import { swing } from 'react-animations';

const swingAnimation = keyframes`${swing}`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 50px;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: ${prop => prop.theme.space[6]}px;

  @media screen and (min-width: 768px) {
    margin-bottom: ${prop => prop.theme.space[7]}px;
  }
`;

export const Image = styled.img`
  animation: 1s ${swingAnimation};
`;
export const ErrorTitle = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 26px;
`;

export const ErrorText = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${prop => prop.theme.space[6]}px;
  font-family: Verdana;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    margin-bottom: ${prop => prop.theme.space[6]}px;
  }
`;

export const StyledLink = styled(NavLink)`
  margin: 0;
  text-decoration: none;
`;
