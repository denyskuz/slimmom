import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Link = styled(NavLink)`
  color: #9b9faa;
  font-family: Gotham Pro;
  font-size: 14px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0.04em;
  text-decoration: none;
  &.active {
    color: #212121;
  }

  :first-of-type {
    margin-right: 16px;
  }

  :hover {
    color: #fc842d;
  }
`;
