// import './App.css';
import HomeContainer from './component/HomeContainer/HomeContainer';
import GlobalStyle from '../src/style/global';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../src/style/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="App">
          <GlobalStyle />
          <HomeContainer></HomeContainer>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
