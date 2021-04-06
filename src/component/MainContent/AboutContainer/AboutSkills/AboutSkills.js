import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
height: 35%;
padding: 10px;
border-bottom: 1px solid white;
    @media(max-width: 992px) {
        height: 100%;
        }
`;

const SkillsTitle = styled.div`
display: inline-block;
font-size: 24px;
border-bottom: 3px solid white;
`;

const SkillsContent = styled.div`
padding: 10px;
`;


function AboutSkills() {

    return(
        <SkillsContainer>
            <SkillsTitle>Skills</SkillsTitle>
            <SkillsContent>
                frontend : React, JS, CSS, HTML
            </SkillsContent>
            <SkillsContent>
                dev-ops: github, vscode 
            </SkillsContent>
            <SkillsContent>
                etc : styled-component
            </SkillsContent>
        </SkillsContainer>
    );
}

export default AboutSkills;