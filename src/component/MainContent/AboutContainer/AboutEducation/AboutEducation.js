import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.div`
height: 65%;
padding: 10px;
    @media(max-width: 992px) {
        height: 100%;
    }
`;

const EducationTitle = styled.h2`
display: inline-block;
font-size: 24px;
border-bottom: 3px solid white;
`;

const EducationContent = styled.div`
padding: 10px;
    @media(max-width: 992px) {
    }
`;

function AboutEducation() {

    return(
        <EducationContainer>
            <EducationTitle>Education</EducationTitle>
            <EducationContent>2021--1</EducationContent>
        </EducationContainer>
    );
}

export default AboutEducation;