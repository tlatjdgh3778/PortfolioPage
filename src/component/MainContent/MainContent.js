import React from 'react';
import styled from 'styled-components';
import NavigationBar from './NavigationBar/NavigationBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutContainer from './AboutContainer/AboutContainer';
import ResumeContainer from './ResumeContainer/ResumeContainer';
import ProjectContainer from './ProjectContainer/ProjectContainer';

const MainContentStyle = styled.div`
color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid blue;
  height: 100%;
  width: 75%;
  border-radius: 30px;

  @media(max-width: 992px) {
      width: 95%;
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
                    <Route exact path="/Resume">
                        <ResumeContainer></ResumeContainer>
                    </Route>
                </Switch>
            </MainContentStyle>
        </BrowserRouter>
    );
}
export default MainContent;