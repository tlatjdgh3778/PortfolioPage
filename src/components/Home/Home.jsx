import React from 'react';
import { About, Project } from 'pages/index';
import SideBar from 'components/SideBar/SideBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import * as S from './Home.style';
import * as GS from 'style/Component.style';

const Home = () => {
    console.log('Home Render');
    
    return(
        <S.HomeStyle>
            <SideBar></SideBar>
            <BrowserRouter>
                <GS.MainStyle>
                    <NavigationBar />
                    <Switch>
                        <Route exact path="/">
                            <About></About>
                        </Route>
                        <Route exact path="/Projects">
                            <Project></Project>
                        </Route>
                    </Switch>
                </GS.MainStyle>
            </BrowserRouter>
        </S.HomeStyle>
    );
}

export default Home;