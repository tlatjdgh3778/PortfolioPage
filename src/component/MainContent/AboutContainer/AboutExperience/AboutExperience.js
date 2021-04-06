import React from 'react';
import styled from 'styled-components';

const ExperienceStyle = styled.div`
display: flex;
flex-direction: column;
border: 1px solid blue;
width:50%;

    @media(max-width: 992px) {
        width: 100%;
    }
`;


const ExperienceFirst = styled.div`
border: 1px solid red;
padding: 10px;
`;
function AboutExperience() {

    return(
        <ExperienceStyle>
            <ExperienceFirst>첫 번째</ExperienceFirst>
        </ExperienceStyle>
    );
}

export default AboutExperience;