import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: Gotham Pro;
  font-size:  ${prop => prop.theme.fontSizes.xs};
  font-weight:  ${prop => prop.theme.fontWeights.bold};
  line-height: 0.93;
  letter-spacing: 0.04em;
  text-decoration: none;
  text-transform: uppercase;
  color:  ${prop => prop.theme.colors.secondary};

  :first-child {
    margin-right: ${prop => prop.theme.space[4]}px;
  }

  :hover {
    color:  ${prop => prop.theme.colors.accent};
  }

  &.active {
    color:  ${prop => prop.theme.colors.primary};
  }
`;
