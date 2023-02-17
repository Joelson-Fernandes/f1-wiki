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
    background-color: ${(props) => props.theme.background};
    max-width: 1400px;
    margin: auto;
  }

  h1, h2, h3, h4, h5, h6, th {
    font-family: 'Zen Dots', cursive;
    letter-spacing: 4px;
  }

  p, a, tr {
    font-family: 'Zen Dots', cursive;
    letter-spacing: 3px;
  }
`;
