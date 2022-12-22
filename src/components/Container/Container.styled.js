import styled from 'styled-components';

export const MainContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: ${prop => prop.theme.space[5]}px;
    padding-right: ${prop => prop.theme.space[5]}px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: ${prop => prop.theme.space[4]}px;
    padding-right: ${prop => prop.theme.space[4]}px;
  }
`;
