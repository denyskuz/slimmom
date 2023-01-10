import styled from '@emotion/styled';

export const Overlay = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 10;
  overflow: auto;

  @media screen and (min-width: 768px) {
    background: rgba(33, 33, 33, 0.12);
    position: fixed;
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  overflow: hidden;
  border-radius: 3px;

  background-color: ${prop => prop.theme.palette.background.paper};

  @media screen and (min-width: 768px) {
    top: 485px;
    border-radius: 0px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    max-width: 594px;
  }
`;

export const CloseButton = styled.button`
  display: none;

  @media screen and (min-width: 768px) {
    background-image: url('./Modal/closeCross.svg');
    display: block;
    position: absolute;
    top: 24px;
    right: 24px;
    background-color: inherit;
    width: 15px;
    height: 15px;
    background-repeat: no-repeat;
    border: none;
    background-color: transparent;
  }
  &:hover {
    border-radius: 50%;
    background-color: ${prop => prop.theme.palette.primary.main};
  }
`;

export const MobileModalClose = styled()``;

export const Title = styled.p`
  margin: 0;
  margin-bottom: 40px;
  font-size: 18px;
  line-height: 26px;

  @media screen and (min-width: 320px) {
    margin-left: 15px;
    margin-right: 15px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 22px;
    margin-left: 43px;
    margin-right: 42px;
    font-size: 26px;
    line-height: 32px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 91px;
    margin-right: 90px;
  } ;
`;
