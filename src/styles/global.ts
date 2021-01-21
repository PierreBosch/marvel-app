import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        -webkit-font-smoothing: antialiased;
        color: #FFF;
        background: #213544;
    }

    body, input, button {
        font-size: 16px;
        font-family: 'Nunito', sans-serif;
    }

    strong, h1,h2,h3,h4,h5,h6 {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`;

