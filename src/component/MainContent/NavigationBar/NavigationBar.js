import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavigationBarStyle = styled.div`
display: flex;
justify-content: space-between;
width: 90%;
margin: 20px 0;

    @media ${({ theme }) => theme.device.TabletPortrait} {
            margin: 10px 0;
    } 
`;


const NavigationBarName = styled.div`
font-size: 40px;
font-weight: 700;
padding-bottom: 5px;
border-bottom: 3px solid ${({ theme }) => theme.color.black};

    @media ${({ theme }) => theme.device.TabletPortrait} {
        font-size: ${({ theme }) => theme.fontSize.xxl};
    } 
`;

const NavigationBarList = styled.div`
display: flex;
align-items: center;
font-size: ${({ theme }) => theme.fontSize.lg};

    @media ${({ theme }) => theme.device.TabletPortrait} {
        font-size: ${({ theme }) => theme.fontSize.sm};
    }
`;
const Btn = styled.button`
margin-right: 10px;
outline: none;
border: none;
color: ${({ theme }) => theme.color.black};
background-color: inherit;
font-size: ${({ theme }) => theme.fontSize.lg};
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