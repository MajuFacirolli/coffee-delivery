import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.background};
        color: ${props => props.theme["base-text"]};
    }

    body, input, textarea, button {
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.5rem;
        line-height: 1.3;
        font-weight: 800;
    }
`