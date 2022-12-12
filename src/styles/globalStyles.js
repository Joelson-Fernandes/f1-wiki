import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  body {
    background-color: #000;
  }

  h1 {
    font-family: 'Zen Dots', cursive;
    letter-spacing: 4px;
  }

  p {
    font-family: 'Zen Dots', cursive;
    letter-spacing: 3px;
  }
`;
