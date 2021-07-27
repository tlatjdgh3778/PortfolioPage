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
                    💻 Frontend : JavaScript, React, React-Redux
                </S.SkillsContent>
                <S.SkillsContent>
                    ⌨ Dev Tools: Github, Vscode 
                </S.SkillsContent>
                <S.SkillsContent>
                    🎨 Etc : Styled-component, Material-UI 
                </S.SkillsContent>
            </GS.AboutContent>
        </GS.AboutContentContainer>
    );
}

export default AboutSkills;