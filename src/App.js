// import './App.css';
import React, { useState } from 'react';
import HomeContainer from 'components/HomeContainer/HomeContainer';
import ChangeMode from 'components/ChangeMode/ChangeMode';
import GlobalStyle from 'style/global';
import { ThemeProvider } from 'styled-components';
import theme from 'style/theme'

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
