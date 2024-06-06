import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

 @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

 @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6{
    font-family: 'Raleway', sans-serif;
  }

  p{
    font-family: 'Open Sans', sans-serif;
  }

  .btn {
    background: #14279b;
    padding: 8px 25px;
    border-radius: 50px;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #2383c4;
    }
  }

`;

export default GlobalStyle;