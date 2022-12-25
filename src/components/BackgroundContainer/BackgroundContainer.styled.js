import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    background: ${props =>
      props.visible ? `linear-gradient(to left, #F0F1F3 , #fff)` : 'transparent'};
  }
  z-index: 1;
`;

export const StrawberryImg = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }
  position: absolute;
  display: ${props => (props.visibleImg ? 'flex' : 'none')};
  @media screen and (max-width: 1279px) {
    bottom: -130px;
    right: 10px;
  }
  @media screen and (min-width: 1280px) {
    bottom: 45px;
    right: 0px;
  }
  z-index: -1;
`;

export const StrawberryAuthImg = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }
  position: absolute;
  display: ${props => (props.visibleImg ? 'flex' : 'none')};
  @media screen and (max-width: 1279px) {
    bottom: -130px;
    right: 10px;
  }
  @media screen and (min-width: 1280px) {
    bottom: 45px;
    right: 0px;
  }
  z-index: -1;
`;

export const BananaImg = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }
  position: absolute;
  display: ${props => (props.visibleImg ? 'flex' : 'none')};
  @media screen and (max-width: 1279px) {
    bottom: -300px;
    right: 0px;
  }
  @media screen and (min-width: 1280px) {
    top: 0px;
    right: 0px;
  }
  z-index: 0;
`;

export const LeafsImg = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }
  position: absolute;
  display: ${props => (props.visibleImg ? 'flex' : 'none')};
  @media screen and (max-width: 1279px) {
    bottom: -300px;
    left: 0px;
  }
  @media screen and (min-width: 1280px) {
    top: 0;
    right: 195px;
  }
  z-index: -1;
`;

export const LeafsAuthImg = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }
  position: absolute;
  display: ${props => (props.visibleImg ? 'flex' : 'none')};
  @media screen and (max-width: 1279px) {
    bottom: -300px;
    left: 0px;
  }
  @media screen and (min-width: 1280px) {
    top: 0;
    right: 195px;
  }
  z-index: -1;
`;


export const VectorImg = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }
  position: absolute;
  display: ${props => (props.visibleImg ? 'flex' : 'none')};

  @media screen and (max-width: 1279px) {
    bottom: -300px;
    right: 0px;
  }
  @media screen and (min-width: 1280px) {
    bottom: 50px;
    right: 0px;
  }
  z-index: -1;
`;

export const LeafsSide = styled.img`
  pointer-events: none;
  @media screen and (max-width: 1279px) {
    display: none;
  }
  position: absolute;
  display: ${props => (props.visibleImg ? 'flex' : 'none')};
  top: 0px;
  right: 0px;
  z-index: 0;
`;

export const LeafsFoot = styled.img`
  @media screen and (min-width: 1279px) {
    display: none;
  }
  position: absolute;
  display: ${props => (props.visibleImg ? 'flex' : 'none')};
  bottom: 0px;
  right: 0px;
  z-index: -1;
`;