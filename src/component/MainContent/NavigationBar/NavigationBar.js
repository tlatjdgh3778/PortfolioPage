import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from '../../../style/variable';

const NavigationBarStyle = styled.div`
display: flex;
justify-content: space-between;
width: 90%;
margin: 20px 0;

    @media ${device.TabletPortrait} {
            margin: 10px 0;
    } 
`;


const NavigationBarName = styled.div`
font-size: 40px;
font-weight: 700;
padding-bottom: 5px;
border-bottom: 3px solid black;

    @media ${device.TabletPortrait} {
        font-size: 32px;
    } 
`;

const NavigationBarList = styled.div`
display: flex;
align-items: center;
font-size: 24px;

    @media ${device.TabletPortrait} {
        font-size: 16px;
    }
`;
const Btn = styled.button`
margin-right: 10px;
outline: none;
border: none;
color: black;
background-color: inherit;
font-size: 16px;
cursor: pointer;
font-weight: 600;
padding: 10px;
border-radius: 10px;

    &:active {
        background-color: #f2f2f2;
    }
`;


function NavigationBar(){
const [page, setPage] = useState('About');

    return(
        <NavigationBarStyle>
            <NavigationBarName>{page}</NavigationBarName>
            <NavigationBarList>

                <NavLink to="/">
                    {page !== "About" && <Btn onClick={() => setPage('About')} value="About">About</Btn>}
                </NavLink>
                <NavLink to="/Projects">
                    {page !== "Projects" && <Btn onClick={() => setPage('Projects')} value="Projects">Projects</Btn>}
                </NavLink>

            </NavigationBarList>
        </NavigationBarStyle>
    );
};

export default NavigationBar;