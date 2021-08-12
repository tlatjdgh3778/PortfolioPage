import React from 'react';
import * as S from './AboutExperience.style';
import * as GS from 'style/Component.style';

const AboutExperience = () => {
    console.log('AboutExperience Render');
    return(
        <GS.AboutContentContainer>
            <GS.AboutContentTitle>Experience</GS.AboutContentTitle>
            <GS.AboutContent>
                <S.ExperienceContent>🤣</S.ExperienceContent>
            </GS.AboutContent>
        </GS.AboutContentContainer>
    );
}

export default AboutExperience;