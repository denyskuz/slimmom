import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { FiCornerDownLeft } from 'react-icons/fi';

export const List = styled.div`
    display: flex;

    @media only screen and (min-width: 1280px) {
        display: flex;
        margin-right: 550px;
    }
`;

export const ListItem = styled(NavLink)`
    color: #9B9FAA;
    font-family: Gotham Pro;
    font-size: 14px;
    font-weight: 700;
    line-height: 13px;
    letter-spacing: 0.04em;
    padding: 10px 10px 10px 0;
    
    &.active {
        color: #212121;
    }
`;
export const UserName = styled.h2`
    display: inline;
    font-family: Gotham Pro;
    font-size: 14px;
    font-weight: 700;
    line-height: 13px;
    letter-spacing: 0.04em;
    padding: 15px 16px 13px 0;
    margin-left: 10px;
    border-right: 2px solid;
    border-color: #E0E0E0;
`;

export const Button = styled.button`
    font-family: Gotham Pro;
    font-size: 14px;
    font-weight: 700;
    line-height: 13px;
    letter-spacing: 0.04em;
    color: #9B9FAA;
    border: none;
    background-color: transparent;
    padding: 15px 0;
    cursor: pointer;

    &:hover {
        color: #FC842D;
    }
`;

export const Arrow = styled(FiCornerDownLeft)`
    @media only screen and (min-width: 768px) {
        display: none;
        visibility: hidden;
    }
`;

export const UserInfoWrapper = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
`;
