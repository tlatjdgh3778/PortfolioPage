import React from 'react';
import * as S from './AboutEducation.style';
import * as GS from 'style/Component.style';

const AboutEducation = () => {
    console.log('AboutEducation Render');
    return(
        <GS.AboutContentContainer>
            <GS.AboutContentTitle>Education</GS.AboutContentTitle>
            <GS.AboutContent>
                <S.EducationName>✔ 한국교통대학교</S.EducationName>
                <S.EducationContent>2015.03 ~ 2021.03</S.EducationContent>
                <S.EducationContent>소프트웨어학과 졸업</S.EducationContent>
            </GS.AboutContent>
        </GS.AboutContentContainer>
    );
}

export default AboutEducation;