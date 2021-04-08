import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.div`
height: 65%;
padding: 10px;
    @media ${({ theme }) => theme.device.TabletLandscape} {
        height: 100%;
    }
`;

const EducationTitle = styled.h2`
display: inline-block;
font-size: ${({ theme }) => theme.fontSize.lg};
margin-bottom: 10px;
`;

const EducationName = styled.div`
font-size: ${({ theme }) => theme.fontSize.md};
font-weight: 700;
margin-bottom: 10px;
`;

const EducationContent = styled.div`
padding: 5px;
`;

function AboutEducation() {

    return(
        <EducationContainer>
            <EducationTitle>Education</EducationTitle>
            <EducationName>✔ 한국교통대학교</EducationName>
            <EducationContent>2015.03 ~ 2021.03</EducationContent>
            <EducationContent>소프트웨어학과 졸업</EducationContent>
        </EducationContainer>
    );
}

export default AboutEducation;