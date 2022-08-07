import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    a {
      text-decoration: none;
    }
    
    :root {
        --error-bg: #CB3127;
        --error-text: #F1EFEA;
        --warning-bg: #fefce8;
        --warning-text: #a16107;
        --success-bg: #28a745;
        --disabled-bg: #C4C4C4;
        --disabled-text: #6F6F6F;
    }
`;
