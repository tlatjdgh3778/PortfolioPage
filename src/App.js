// import './App.css';
import React, { useState } from 'react';
import HomeContainer from './component/HomeContainer/HomeContainer';
import ChangeMode from './component/ChangeMode/ChangeMode';
import GlobalStyle from '../src/style/global';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../src/style/theme';

function App() {
  const [isDark, setIsDark] = useState(false);
  
  const changeTheme = () => {
    setIsDark(!isDark);
  }

  return (
    <>
      <ThemeProvider theme={isDark? theme.darkMode : theme.lightMode}>
      <GlobalStyle />
        <div className="App">
          <ChangeMode changeTheme={changeTheme} isDark={isDark}></ChangeMode>
          <HomeContainer></HomeContainer>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
