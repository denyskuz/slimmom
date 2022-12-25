import styled from 'styled-components';

export const Loading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wave = styled.div`
  z-index: 5;
  width: 10px;
  height: 100px;
  background: linear-gradient(50deg, #fc842d, #eea875);
  margin: 5px;
  animation: wave 1s linear infinite;
  border-radius: 50px;
  &:nth-child(2) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.2s;
  }
  &:nth-child(4) {
    animation-delay: 0.3s;
  }
  &:nth-child(5) {
    animation-delay: 0.4s;
  }
  @keyframes wave {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`;
