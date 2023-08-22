import { createGlobalStyle } from "styled-components";
import colors from "./colors";
import config from "./config";

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: smooth;
    --nav-size: ${config.nav_size};
  }

  * {
    margin: 0; 
    padding: 0; 
    box-sizing: border-box;
    outline: none;
  }
  
  html,
  body {
    scroll-behavior: smooth;
  }
  
  body {
    font-size: 16px;
  }

  a, button {
    display: block;
    cursor: pointer;
    color: inherit;
    border: none;
    font-size: 1em;
    text-decoration: none;
    background-color: transparent;
    outline: 2px solid transparent;
    outline-offset: 2px;

    &:hover {
      outline: 2px solid #${colors.hex.primary._500};
    }
  }

  textarea {
    font-family: inherit;
    font-size: 1em;
    padding: .35em .5em;
    width: 100%;
    border: 2px solid #aaa;
    border-radius: 5px;
    resize: vertical;
    max-height: 20rem;
    min-height: 6rem;
  }

  .cap {
    text-transform: capitalize;
  }
`;

export default GlobalStyles;
