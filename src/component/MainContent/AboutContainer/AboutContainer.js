import React from 'react';
import styled from 'styled-components';
import AboutIntroduce from './AboutIntroduce/AboutIntroduce';
import AboutEducation from './AboutEducation/AboutEducation';
import AboutExperience from './AboutExperience/AboutExperience';
import AboutSkills from './AboutSkills/AboutSkills';


const AboutContainerStyle = styled.div`
display: flex;
width: 90%;
height: 100%;
border-radius: 10px;
margin: 20px 0;

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

    @media ${(props) => props.theme.device.TabletLandscape} {
        width: 100%;
    }
`;

const SkillandExp = styled.div`
display: flex;
flex-direction: column;
width: 50%;
 
    @media ${(props) => props.theme.device.TabletLandscape} {
        width: 100%;
    }
`;
function AboutContainer() {

    return(
        <AboutContainerStyle>
            <IntroandEdu>
                <AboutIntroduce></AboutIntroduce>
                <AboutEducation></AboutEducation>
            </IntroandEdu>
            <SkillandExp>
                <AboutSkills></AboutSkills>
                <AboutExperience></AboutExperience>
            </SkillandExp>
        </AboutContainerStyle>
    );
}

export default AboutContainer;