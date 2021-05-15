import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #e52e40;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  // REM = 1rem = font-size => vai ser utilizado para definir os tamanhos dos componetes para ficar "mais responsivo"
  // font-size: 16px (Desktop)
  // utilizar % para caso o usuário definir outro tamanho de fonte para tela dele (maior ou menor)
  html {
    @media (min-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (min-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;