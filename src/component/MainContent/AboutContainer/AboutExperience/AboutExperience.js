import React from 'react';
import styled from 'styled-components';
import { device } from '../../../../style/variable';

const ExperienceContainer = styled.div`
height: 65%;
padding: 10px;
/* display: flex;
flex-direction: column; */
    @media ${device.TabletLandscape} {
        height: 100%;
    }
`;

const ExperienceTitle = styled.h2`
display: inline-block;
font-size: 24px;
margin-bottom: 10px;
`;

const ExperienceContent = styled.div`
padding: 10px;
`;


function AboutExperience() {

    return(
        <ExperienceContainer>
            <ExperienceTitle>Experience</ExperienceTitle>
            <ExperienceContent>🤣</ExperienceContent>
        </ExperienceContainer>
    );
}

export default AboutExperience;