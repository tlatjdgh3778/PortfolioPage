import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  // 밑에는 글로벌 스타일 작성

* {
  margin: 0;
  padding: 0;

  
  &::-webkit-scrollbar {
        width: 8px;
    }
  &::-webkit-scrollbar-thumb {
      background-color:${({ theme }) => theme.color.highlightColor};
      border-radius: 10px;
  }
  &::webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.color.hoverColor};
      border-radius: 10px;
  }
    
  body {
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.color.wallpaperColor};
    transition: 0.7s;
  }
}
`;

export default GlobalStyle;
