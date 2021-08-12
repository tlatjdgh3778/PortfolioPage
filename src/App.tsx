import React, { useState } from "react";
import Home from "components/Home/Home";
import ChangeMode from "components/ChangeMode/ChangeMode";
import GlobalStyle from "style/global-style";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "style/theme";

const App = () => {
    const [isDark, setIsDark] = useState(false);
    const changeTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <>
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                <GlobalStyle />
                <div className="App">
                    <ChangeMode changeTheme={changeTheme} isDark={isDark}></ChangeMode>
                    <Home></Home>
                </div>
            </ThemeProvider>
        </>
    );
};

export default App;
