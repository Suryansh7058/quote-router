import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
    * {
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        margin: 0;
        background-color: #e7f8f8;
    }

    .centered {
        margin: 3rem auto;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .focused {
        font-size: 3rem;
        font-weight: bold;
        color: white;
    }
`;

export default GlobalStyle;
