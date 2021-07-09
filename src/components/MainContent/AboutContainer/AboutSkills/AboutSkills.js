import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
height: 50%;
padding: 5px;

    @media ${(props) => props.theme.device.TabletLandscape} {
        height: 100%;
    }
`;

const SkillsTitle = styled.h2`
display: inline-block;
font-size: ${(props) => props.theme.fontSize.lg};
padding-bottom: 10px;
`;

const SkillsContent = styled.div`
padding: 0 10px 10px;
`;


function AboutSkills() {

    return(
        <SkillsContainer>
            <SkillsTitle>Skills</SkillsTitle>
            <SkillsContent>
                💻 Frontend : React, JavaScript, CSS/HTML
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