import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  padding: 10px;
  font-family: GothamPro-Bold;
  font-size: ${prop => prop.theme.fontSizes.xs};
  font-weight: ${prop => prop.theme.fontWeights.bold};
  line-height: 0.93;
  letter-spacing: 0.04em;
  text-decoration: none;
  text-transform: uppercase;
  color: ${prop => prop.theme.colors.secondary};

  :first-child {
    margin-right: ${prop => prop.theme.space[4]}px;
  }

  :hover {
    color: ${prop => prop.theme.colors.accent};
  }

  &.active {
    color: ${prop => prop.theme.colors.primary};
  }
`;

export const LangButton = styled.button`
  cursor: pointer;
  width: 20px;
  height: 20px;
  border: none;
  margin-right: 5px;
  background-color: transparent;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: baseline;
  padding-top: 8px;
`;

export const Lang = styled.ul`

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  position: relative;
  left: 0;
  display: none;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const LangItem = styled.option``;
