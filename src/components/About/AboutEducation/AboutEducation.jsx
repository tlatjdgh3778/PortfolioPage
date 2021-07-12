import React from 'react';
import * as S from './AboutEducation.style';

const AboutEducation = () => {

    return(
        <S.EducationContainer>
            <S.EducationTitle>Education</S.EducationTitle>
            <S.EducationWrapper>
                <S.EducationName>✔ 한국교통대학교</S.EducationName>
                <S.EducationContent>2015.03 ~ 2021.03</S.EducationContent>
                <S.EducationContent>소프트웨어학과 졸업</S.EducationContent>
            </S.EducationWrapper>
        </S.EducationContainer>
    );
}

export default AboutEducation;