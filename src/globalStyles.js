import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scrollbar-width: none;
    }

    body {
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: rgb(28, 28, 28);
        background-color: #151515
    }
    main {
       position: relative;
       z-index: 1;
       margin-top: 198px;
       @media (min-width: 768px) {
           margin-top: 210px;
       }
       @media (min-width: 1280px) {
           margin-top: 240px;
       }
    }
    .freezeflow {
        overflow-y: hidden;
    }

    :root {
        --maxWidth: 1120px;
        --brandRed: #8D1922;
    }

    .headroom-wrapper {
        z-index: 10;
        position: absolute;
        /* height: 86px; */
        width: 100%;
}
    .headroom--unfixed {
  position: relative;
  transform: translateY(0);
}
`
