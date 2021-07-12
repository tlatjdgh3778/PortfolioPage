import React from 'react';
import * as S from './AboutSkills.style';

const AboutSkills = () => {

    return(
        <S.SkillsContainer>
            <S.SkillsTitle>Skills</S.SkillsTitle>
            <S.SkillsContent>
                💻 Frontend : React, JavaScript, CSS/HTML
            </S.SkillsContent>
            <S.SkillsContent>
                ⌨ Dev Tools: github, vscode 
            </S.SkillsContent>
            <S.SkillsContent>
                🎨 Etc : styled-component
            </S.SkillsContent>
        </S.SkillsContainer>
    );
}

export default AboutSkills;