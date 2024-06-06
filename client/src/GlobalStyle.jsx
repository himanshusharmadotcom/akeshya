import { createGlobalStyle } from "styled-components";
import openSans from './assets/fonts/openSans.ttf'
import raleway from './assets/fonts/raleway.ttf'

export const GlobalStyle = createGlobalStyle`

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face{
    font-family: 'openSansFont';
    src: url(${openSans});
  }

  
  @font-face{
    font-family: 'ralewayFont';
    src: url(${raleway});
  }
  

  h1, h2, h3, h4, h5, h6{
    font-family: 'ralewayFont', sans-serif;
  }

  p{
    font-family: 'openSansFont', sans-serif;
  }

  .btn {
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    background: #14279b;
    padding: 8px 25px;
    border-radius: 50px;
    color: #fff!important;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #2383c4;
    }
  }

  .container {
    max-width: 89%;
    margin: 0 auto;
  }

`;