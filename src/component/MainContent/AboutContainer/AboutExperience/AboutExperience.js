import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.div`
height: 65%;
padding: 10px;
/* display: flex;
flex-direction: column; */
    @media ${(props) => props.theme.device.TabletLandscape} {
        height: 100%;
    }
`;

const ExperienceTitle = styled.h2`
display: inline-block;
font-size: ${(props) => props.theme.fontSize.lg};
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