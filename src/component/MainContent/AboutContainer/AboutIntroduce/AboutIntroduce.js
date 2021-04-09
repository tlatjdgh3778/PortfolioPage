import React from 'react';
import styled from 'styled-components';

const IntroduceContainer = styled.div`
height: 35%;
padding: 10px;
@media ${({ theme }) => theme.device.TabletLandscape} {
        height: 100%;
    }
`;

const IntroduceContent = styled.div`
padding: 10px;
`;

const IntroduceTitle = styled.h2`
display: inline-block;
font-size: ${({ theme }) => theme.fontSize.lg};
margin-bottom: 10px;
`;

function AboutIntroduce() {

    return(
        <IntroduceContainer>
        <IntroduceTitle>Introduce</IntroduceTitle>
        <IntroduceContent>저는 누구입니다.</IntroduceContent>
        </IntroduceContainer>
    );
}

export default AboutIntroduce;