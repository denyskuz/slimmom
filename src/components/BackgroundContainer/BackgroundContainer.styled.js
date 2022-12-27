import styled, {keyframes} from 'styled-components';
import { zoomIn } from 'react-animations';

const zoomAnimation = keyframes`${zoomIn}`; 


export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;

  @media screen and (min-width: 1280px) {
    background-color: ${props => (props.visible ? '#FFFFFF' : 'transparent')};
  }
  z-index: 1;
`;

export const StrawberryImg = styled.img`
  animation: 3s ${zoomAnimation};
  @media screen and (max-width: 767.5px) {
    display: none;
  }
  position: absolute;
  display: ${props => (props.visibleImg ? 'flex' : 'none')};
  @media screen and (max-width: 1279px) {
    bottom: -25px;
    right: 30px;
  }
  @media screen and (min-width: 1280px) {
    bottom: 45px;
    right: 0px;
  }
  z-index: -1;
`;

export const StrawberryAuthImg = styled.img`
  animation: 3s ${zoomAnimation};

  @media screen and (max-width: 767.5px) {
    display: none;
  }
  position: absolute;
  display: ${props => (props.visibleImg ? 'flex' : 'none')};
  @media screen and (max-width: 1279px) {
    bottom: 0;
    right: 0;
  }
  @media screen and (min-width: 1280px) {
    bottom: 45px;
    right: 0px;
  }
  z-index: -1;
`;

export const BananaImg = styled.img`
  @media screen and (max-width: 767.5px) {
    display: none;
  }
  position: absolute;
  display: ${props => (props.visibleImg ? 'flex' : 'none')};
  @media screen and (max-width: 1279px) {
    bottom: -220px;
    right: 0px;
  }
  @media screen and (min-width: 1280px) {
    top: 30px;
    right: 0px;
  }
  z-index: 2;
`;

export const LeafsImg = styled.img`
  animation: 3s ${zoomAnimation};
  @media screen and (max-width: 767.5px) {
    display: none;
  }
  position: absolute;
  display: ${props => (props.visibleImg ? 'flex' : 'none')};
  @media screen and (max-width: 1279px) {
    bottom: -210px;
    left: 0px;
  }
  @media screen and (min-width: 1280px) {
    top: 0px;
    right: 220px;
  }
  z-index: 1;
`;

export const LeafsAuthImg = styled.img`
  animation: 3s ${zoomAnimation};
  @media screen and (max-width: 767.5px) {
    display: none;
  }
  position: absolute;
  display: ${props => (props.visibleImg ? 'flex' : 'none')};
  @media screen and (max-width: 1279px) {
    bottom: 45px;
    left: 20px;
  }
  @media screen and (min-width: 1280px) {
    top: 0;
    right: 195px;
  }
  z-index: -1;
`;

export const VectorImg = styled.img`
  @media screen and (max-width: 767.5px) {
    display: none;
  }
  position: absolute;
  display: ${props => (props.visibleImg ? 'flex' : 'none')};

  @media screen and (max-width: 1279px) {
    bottom: -220px;
    right: 0;
  }
  @media screen and (min-width: 1280px) {
    bottom: 0px;
    right: 0px;
  }
  z-index: -1;
`;
