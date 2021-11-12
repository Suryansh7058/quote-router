import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
    * {
        box-sizing: border-box;
    }

    html {
        font-family: 'Noto Sans JP', sans-serif;
    }

    body {
        margin: 0;
        background-color: #e0e9f5;
    }

    main {
        margin-top: 7rem;
        text-align: center;
    }

    h1,
    h2,
    h3,
    p {
        color: #042b5f;
    }

`;

export default GlobalStyle;
