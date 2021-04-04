import React from 'react';
import styled from 'styled-components';

const ProfileName = styled.div`
padding: 10px;
font-size: 20px;
font-weight: 700;
`;

const ProfileJob = styled.div`
font-size: 24px;
padding: 10px;
border: 1px solid red;
@media(max-width: 1200px) {
        font-size: 18px;
    }
`;
function SideBarProfileName() {

    return(
        <>
        <ProfileName>성호</ProfileName>
        <ProfileJob>Front-end Developer</ProfileJob>
        </>
    );
}

export default SideBarProfileName;