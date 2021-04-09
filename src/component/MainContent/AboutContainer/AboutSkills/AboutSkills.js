import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
height: 35%;
padding: 10px;

    @media ${({ theme }) => theme.device.TabletLandscape} {
        height: 100%;
    }
`;

const SkillsTitle = styled.h2`
display: inline-block;
font-size: ${({ theme }) => theme.fontSize.lg};
margin-bottom: 10px;
`;

const SkillsContent = styled.div`
padding: 10px;
`;


function AboutSkills() {

    return(
        <SkillsContainer>
            <SkillsTitle>Skills</SkillsTitle>
            <SkillsContent>
                💻 Frontend : React, JS, CSS/HTML
            </SkillsContent>
            <SkillsContent>
                ⌨ Dev Tools: github, vscode 
            </SkillsContent>
            <SkillsContent>
                🎨 Etc : styled-component
            </SkillsContent>
        </SkillsContainer>
    );
}

export default AboutSkills;