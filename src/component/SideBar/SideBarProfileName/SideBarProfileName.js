import React from 'react';
import styled from 'styled-components';
import { device } from '../../../style/variable';

const ProfileName = styled.div`
padding: 10px;
font-size: 20px;
font-weight: 700;
`;

const ProfileJob = styled.div`
font-size: 20px;
padding: 10px;
border-radius: 10px;
background-color: #f2f2f2;

    @media ${device.Laptops} {
        font-size: 18px;
    }
`;
function SideBarProfileName() {

    return(
        <>
        <ProfileName>심성호</ProfileName>
        <ProfileJob>Front-end Developer</ProfileJob>
        </>
    );
}

export default SideBarProfileName;