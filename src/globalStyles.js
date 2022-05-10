import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
    box-sizing: border-box; 
  }
  body {
    font-family: 'Raleway', sans-serif;
    margin: 0;
    padding: 0;
    color: #48484A;
  }
  h1, h2, h3, h4, h5, p {
    margin: 0;
  }
`;

export default GlobalStyle;
