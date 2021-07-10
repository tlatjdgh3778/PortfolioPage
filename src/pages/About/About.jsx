import React from 'react';
import { AboutEducation, AboutExperience, AboutIntroduce, AboutSkills } from 'components/About/index';
import * as S from './About.style';

const About = () => {

    return(
        <>
        <S.AboutStyle>
            <S.IntroandEdu>
                <AboutIntroduce></AboutIntroduce>
                <AboutEducation></AboutEducation>
            </S.IntroandEdu>
            <S.SkillandExp>
                <AboutSkills></AboutSkills>
                <AboutExperience></AboutExperience>
            </S.SkillandExp>
        </S.AboutStyle>
        </>
    );
}

export default About;