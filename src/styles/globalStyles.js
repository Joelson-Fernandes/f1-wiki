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

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: RGBA(204, 204, 204, 0.33);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(245, 14, 0, 0.6);
    border-radius: 20px;
  }
`;
