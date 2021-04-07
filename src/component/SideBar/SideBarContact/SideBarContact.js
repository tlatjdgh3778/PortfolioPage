import React from 'react';
import styled from 'styled-components';

const SideBarEmailContact = styled.button`
width: 80%;
margin: 20px 0;
padding: 10px;
text-align: center;
font-size: 32px;
outline: none;
border: none;
border-radius: 10px;
cursor: pointer;
`;

function SideBarContact() {

    return(
        <SideBarEmailContact>Contact</SideBarEmailContact>
    );
};

export default SideBarContact;