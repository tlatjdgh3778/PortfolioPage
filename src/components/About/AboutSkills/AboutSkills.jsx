import React from 'react';
import * as S from './AboutSkills.style';
import * as GS from 'style/Component.style';

const AboutSkills = () => {
    console.log('AboutSkills Render');
    return(
        <GS.AboutContentContainer>
            <GS.AboutContentTitle>Skills</GS.AboutContentTitle>
            <GS.AboutContent>
                <S.SkillsContent>
                    💻 Frontend : React, JavaScript, CSS/HTML
                </S.SkillsContent>
                <S.SkillsContent>
                    ⌨ Dev Tools: github, vscode 
                </S.SkillsContent>
                <S.SkillsContent>
                    🎨 Etc : styled-component
                </S.SkillsContent>
            </GS.AboutContent>
        </GS.AboutContentContainer>
    );
}

export default AboutSkills;