import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Link, Switch, NavLink } from 'react-router-dom';

const NavigationBarStyle = styled.div`
display: flex;
justify-content: space-between;
width: 90%;
border: 1px solid blue;
margin: 20px 0;
    @media(max-width: 768px) {
            margin: 10px 0;
        } 
`;


const NavigationBarName = styled.div`
border: 1px solid green;
font-size: 40px;
font-weight: 700;

    @media(max-width: 768px) {
        font-size: 32px;
    } 
`;

const NavigationBarList = styled.div`
display: flex;
align-items: center;
font-size: 24px;
border: 1px solid green;

@media(max-width: 768px) {
    font-size: 16px;
  }
`;

const AboutBtn = styled.button`

`;
const ProjectsBtn = styled.button`

`;

function NavigationBar(){
const [page, setPage] = useState('About');

    return(
        <NavigationBarStyle>
            <NavigationBarName>{page}</NavigationBarName>
            <NavigationBarList>

                <NavLink to="/">
                    {page !== "About" && <AboutBtn onClick={() => setPage('About')} value="About">About</AboutBtn>}
                </NavLink>
                <NavLink to="/Projects">
                    {page !== "Projects" && <ProjectsBtn onClick={() => setPage('Projects')} value="Projects">Projects</ProjectsBtn>}
                </NavLink>

            </NavigationBarList>
        </NavigationBarStyle>
    );
};

export default NavigationBar;