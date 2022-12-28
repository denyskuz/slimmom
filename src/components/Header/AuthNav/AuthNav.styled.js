import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: GothamPro-Bold;
  font-size: 12px;
  font-weight: bold;
  line-height: 0.93;
  letter-spacing: 0.04em;
  text-decoration: none;
  text-transform: uppercase;
  color: #ecdfdf;

  &:last-child {
    margin-left: ${prop => prop.theme.space[4]}px;
  }

  :hover {
    color: pink;
  }

  &.active {
    color: blue;
  }
`;
export const LangSwitcher = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  min-width: 42px;
  position: relative;
  z-index: 3;
  align-self: center;
  // background-color: #ecdfdf;
  border-radius: 5px;
  align-items: baseline;
`;
export const LangList = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  cursor: pointer;
  min-width: 36px;
  max-height: 30px;
  padding-top: 5px;
  position: absolute;
  top: 0;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    min-height: 26px;
    height: 0%;
    box-shadow: 0 4px 12px 0 transparent;
    background-color: #ecdfdf;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    border-radius: 6px;
    background: 0 0;
    box-shadow: none;
  }

  &.droped {
    box-shadow: 0 4px 12px 0 rgb(0 0 0 / 10%);
    background-color: grey;
    max-height: unset;
    margin-right: 3px;
    &::before {
      height: 100%;
      box-shadow: 0 4px 12px 0 rgb(0 0 0 / 10%);
      background-color: #ecdfdf;
    }
    button {
      line-height: 1;
      margin: 4px 0;
      display: flex;
      opacity: 1;
      cursor: pointer;

      &.active {
        &::after {
          transform: translateY(-50%) scaleY(-1.1) rotate(45deg);
        }
      }
      &:not(.active) {
        width: 100%;
        opacity: 1;
        pointer-events: all;
      }
    }
  }
`;

export const LangButton = styled.button`
  border: none;
  background: #f9f9f9;
  color: orange;
  font-family: GothamPro-Bold;
  font-size: 12px;
  font-weight: bold;
  line-height: 0.93;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-align: center;
  color: black;
  border-radius: 8px;
  padding: 4px;
  margin-top: 4px;

  position: relative;
  transition: all 0.3s ease;
  width: 100%;
  z-index: 5;
  cursor: pointer;

  display: flex;
  gap: 4px;
  align-items: baseline;

  &:hover {
    color: orange;
  }

  &.active {
    order: -1;
    pointer-events: all;

    &::after {
      opacity: 1;
      transform: translateY(-70%) scaleY(1.1) rotate(45deg);
    }
  }
  &:not(.active) {
    width: 0%;
    pointer-events: none;
    opacity: 0;
  }
`;
