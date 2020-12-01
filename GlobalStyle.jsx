import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
  font-family: 'Open Sans Condensed';
  background: #f0efeb;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
}

a {
  text-decoration: none;
}

* {
  box-sizing: border-box;
  margin: 0;
}
`;