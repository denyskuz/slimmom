import { NavLink } from "react-router-dom";
import styled, {css} from "styled-components";

export const BurgerButton = styled.button`
    display: block;
    /* float: left; */
    outline: 0;
    border: 0;
    margin-left: 0;
    padding: 0;
    background: none;

    @media screen and (min-width: 1280px) {
        display: none;
    }

    &.active {
        span:nth-of-type(1) {
            transform: rotate(45deg)
            translate(9px, 9px);
            width: 24px;
            height: 5px;
            margin-bottom: 5px;
        }

        span:nth-of-type(2) {
            opacity: 0;
            pointer-events: none;
        }

        span:nth-of-type(3) {
            transform: rotate(-45deg)
            translate(3px, -3px);
            width: 24px;
            height: 5px;
            margin-bottom: 5px;
        }
    }
`;

export const BurgerMenu = styled.nav`
    position: absolute;
    top: 80px;
    right: 0;
    display: block;
    width: 100%;
    height: 100%;
    margin-top: 0;
    padding-right: 0;
    align-items: stretch;
    background-color: #264061;
    transform: translateX(-100%);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

    @media screen and (min-width: 1280px) {
        display: none;
    }


    ${prop => prop.open && css`
trasform: translateX(0);
    `}
`;

export const NavDairyLink = styled(NavLink)`
    position: relative;
    display: block;
    text-align: center;
    max-width: 100%;
    padding-top: 60px;
    background-position: 88% 50%;
    background-size: 36px;
    background-repeat: no-repeat;
    transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
    text-decoration: none;
    color: #9b9faa;
    font-size: 18px;
    line-height: 1.2;
    font-weight: bold;
    font-family: Verdana;

    @media screen and (min-width: 768px) {
        padding-top: 108px;
        font-size: 24px;

    }

    &.active {
        color: #ffffff;
    }
`;

export const NavCalcLink = styled(NavLink)`
    display: block;
    text-align: center;
    max-width: 100%;
    padding-top: 33px;
    background-position: 88% 50%;
    background-size: 36px;
    background-repeat: no-repeat;
    transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
    text-decoration: none;
    color: #9b9faa;
    font-size: 18px;
    line-height: 1.2;
    font-weight: bold;
    font-family: Verdana;

    &.active {
        color: #ffffff;
    }
`;