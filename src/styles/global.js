import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--background-color);
    }

    a {
      text-decoration: none;
    }
    
    :root {
        --background-color: #1e1d32;
        --background-box-dark: #2c2856;
        --background-box-light: #412664;
        --orange: #f27984;
        --red: #f54178;
        --red-dark: #551e65;
        --text: #eef0f9;
        --blue-light: #5db1f5;
        --blue: #102bb8;
        --pink: #ec32e3;
        --yellow: #f9b677;
        --purple: #9c51f6;
        --green: #24d5a1;
    }
`;
