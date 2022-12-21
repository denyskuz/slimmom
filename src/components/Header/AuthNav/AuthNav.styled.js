import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: Gotham Pro;
  font-size: 14px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0.04em;
  text-decoration: none;
  text-transform: uppercase;
  color: #9b9faa;

  :first-child {
    margin-right: 16px;
  }

  :hover {
    color: #fc842d;
  }

  &.active {
    color: #212121;
  }
`;
