import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import GothamProBold from '../fonts/GothamPro-Bold.ttf';
import VerdanaRegular from '../fonts/Verdana.ttf';
import VerdanaBold from '../fonts/VerdanaBold.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {font-family: "GothamPro-Bold";
    src: url(${GothamProBold}) format("truetype");
  }
  @font-face {font-family: "Verdana";
    src: url(${VerdanaRegular}) format("truetype");
  }
  @font-face {font-family: "Verdana-Bold";
    src: url(${VerdanaBold}) format("truetype");
  }
  body {
    margin: 0;
    font-family: "Verdana";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,h2,h3,h4,h5,h6,a {
    margin: 0;
    font-family:  "GothamPro-Bold";
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
