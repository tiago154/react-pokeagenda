import { createGlobalStyle } from 'styled-components'
import background from './assets/background.png'

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html, body {
    height: 100%;
    background-image: url(${background});
    background-size: contain;
  }

  :root {
    --primary: #36393f;
    --secondary: #2f3136;
    --tertiary: rgb(32,34,37);
    --quaternary: #292b2f;
    --quinary: #393d42;
    --senary: #828386;

    --white: #fff;
    --gray: #8a8c90;
    --chat-input: rgb(64,68,75);
    --symbol: #74777a;
    --notification: #f84a4b;
    --mention-detail: #f9a839;
    --mention-message: #413f3f;
    --link: #5d80d6;
  }
`
