import React from 'react';
import styled from 'styled-components';
import { AboutEducation, AboutExperience, AboutIntroduce, AboutSkills } from 'components/About/index';

const AboutStyle = styled.div`
display: flex;
width: 90%;
height: 100%;
border-radius: 10px;
margin: 20px 0;
line-height: 30px;

    @media ${(props) => props.theme.device.TabletLandscape} {
        flex-direction: column;
    }
    @media ${(props) => props.theme.device.TabletPortrait} {
        margin: 10px 0;
    }
`;

const IntroandEdu = styled.div`
display: flex;
flex-direction: column;
width: 50%;
height: 85%;

    @media ${(props) => props.theme.device.TabletLandscape} {
        width: 100%;
    }
`;

const SkillandExp = styled.div`
display: flex;
flex-direction: column;
width: 50%;
height: 85%;

    @media ${(props) => props.theme.device.TabletLandscape} {
        width: 100%;
    }
`;
const About = () => {

    return(
        <>
        <AboutStyle>
            <IntroandEdu>
                <AboutIntroduce></AboutIntroduce>
                <AboutEducation></AboutEducation>
            </IntroandEdu>
            <SkillandExp>
                <AboutSkills></AboutSkills>
                <AboutExperience></AboutExperience>
            </SkillandExp>
        </AboutStyle>
        </>
    );
}

export default About;