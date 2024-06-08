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
  
  body{
    font-family: "Open Sans", sans-serif;
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
    padding: 14px 25px;
    border-radius: 50px;
    color: #fff!important;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;
    text-decoration: none;

    &:hover {
      background: #2383c4;
    }
  }
  
`;