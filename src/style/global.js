import { createGlobalStyle } from "styled-components";
// 변수명 앞에 두 개의 대시(--) 사용

const GlobalStyle = createGlobalStyle`


* {
  font-family: 'Noto Sans KR', sans-serif;
  margin: 0;
  padding: 0;

  
  &::-webkit-scrollbar {
        width: 8px;
    }
  &::-webkit-scrollbar-thumb {
      background-color:${(props) => props.theme.color.highlightColor};
      border-radius: 10px;
  }
  &::webkit-scrollbar-track {
      background-color: ${(props) => props.theme.color.hoverColor};
      border-radius: 10px;
    }
}

body {
  box-sizing: border-box;
  background-color: ${(props) => props.theme.color.wallpaperColor};
}

`;

export default GlobalStyle;