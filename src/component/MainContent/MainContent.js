import React from 'react';
import styled from 'styled-components';
import NavigationBar from './NavigationBar/NavigationBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutContainer from './AboutContainer/AboutContainer';
import ProjectContainer from './ProjectContainer/ProjectContainer';
import { device } from '../../style/variable';

const MainContentStyle = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  background-color: white;
  height: 100%;
  width: 75%;
  border-radius: 30px;

  @media ${device.TabletLandscape} {
      width: 95%;
      margin: 30px 0;
  }
`;

function MainContent(){
    return(
        <BrowserRouter>
            <MainContentStyle>
                <NavigationBar></NavigationBar>
                <Switch>
                    <Route exact path="/">
                        <AboutContainer></AboutContainer>
                    </Route>
                    <Route exact path="/Projects">
                        <ProjectContainer></ProjectContainer>
                    </Route>
                </Switch>
            </MainContentStyle>
        </BrowserRouter>
    );
}
export default MainContent;