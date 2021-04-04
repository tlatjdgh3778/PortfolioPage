import React from 'react';
import styled from 'styled-components';

const SideBarEmailContact = styled.div`
width: 80%;
border: 1px solid red;
margin: 20px 0;
text-align: center;
font-size: 32px;
border-radius: 10px;
`;
function SideBarContact() {

    return(
        <SideBarEmailContact>Contact</SideBarEmailContact>
    );
};

export default SideBarContact;