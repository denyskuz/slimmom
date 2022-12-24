import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
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
  font-size: ${prop => prop.theme.fontSizes.xs};
  font-weight: ${prop => prop.theme.fontWeights.bold};
  border-radius: 50px;
  margin-left: 0px;
  margin-right: 3px;
  padding: 2px;
  cursor: pointer;
  width: 26px;
  height: 26px;
 border:none;
  background-color: transparent;

  color: ${props => (props.active ? `#fc842d` : 'black')};
  &:hover {
    color: #fc842d;
`;
