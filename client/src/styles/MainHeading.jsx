import styled from "styled-components";

const MainHeading = styled.h2`
    font-size: 36px;
    margin-bottom: 20px;
    position: relative;
    display: inline-block;
    color: #000000;

    &::after {
      content: "";
      width: 50px;
      height: 3px;
      background: #1f3c9e;
      display: inline-block;
      margin: 0 0 10px 15px;
    }

    &::before {
      content: "";
      width: 50px;
      height: 3px;
      background: #1f3c9e;
      display: inline-block;
      margin: 0 15px 10px 0;
    }
`;

export default MainHeading