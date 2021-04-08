import { createGlobalStyle } from "styled-components";
// 변수명 앞에 두 개의 대시(--) 사용

const GlobalStyle = createGlobalStyle`


* {
    @import url("http://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700");
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
}

body {
  box-sizing: border-box;
  background-image: linear-gradient(to right bottom, #ece9e6, #ffffff);
  background-attachment: fixed;
}

`;

export default GlobalStyle;