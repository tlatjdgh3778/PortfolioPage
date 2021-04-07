import React from 'react';
import styled from 'styled-components';

const SideBarEmailContact = styled.button`
width: 80%;
margin: 10px 0;
padding: 10px;
text-align: center;
font-size: 32px;
outline: none;
border: none;
border-radius: 10px;
cursor: pointer;
`;
const SendEmail = (e) => {
    e.preventDefault();
    window.open('mailto:tjdgh3778@gmail.com')};

function SideBarContact() {

    return(
        <SideBarEmailContact onClick={SendEmail}>Contact</SideBarEmailContact>
    );
};

export default SideBarContact;