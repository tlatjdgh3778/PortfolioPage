import React from 'react';
import styled from 'styled-components';
import NavigationBar from './NavigationBar/NavigationBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutContainer from './AboutContainer/AboutContainer';
import ProjectContainer from './ProjectContainer/ProjectContainer';

const MainContentStyle = styled.div`
color: ${(props) => props.theme.color.fontColor};
display: flex;
flex-direction: column;
align-items: center;
border: 2px solid ${(props) => props.theme.color.fontColor};
background-color: ${(props) => props.theme.color.bgColor};
height: 100%;
width: 75%;
border-radius: 30px;
box-shadow: 0 0 10px ${(props) => props.theme.color.highlightColor};

    @media ${(props) => props.theme.device.TabletLandscape} {
        width: 95%;
        margin: 30px 0;
        height: auto;
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