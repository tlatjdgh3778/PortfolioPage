import React from 'react';
import styled from 'styled-components';
import { device } from '../../../../style/variable';

const IntroduceContainer = styled.div`
height: 35%;
padding: 10px;
border-bottom: 1px solid white;
@media ${device.TabletLandscape} {
        height: 100%;
    }
`;

const IntroduceContent = styled.div`
padding: 10px;
`;

const IntroduceTitle = styled.h2`
display: inline-block;
font-size: 24px;
border-bottom: 3px solid white;
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