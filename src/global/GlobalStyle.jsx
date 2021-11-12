import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    * {
    box-sizing: border-box;
    }

    html {
        font-family: 'Noto Sans JP', sans-serif;
    }

    body {
        margin: 0;
        background: #3f3f3f;
    }

`;

export default GlobalStyle;
