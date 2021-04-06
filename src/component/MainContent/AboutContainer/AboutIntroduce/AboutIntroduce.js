import React from 'react';
import styled from 'styled-components';


const IntroduceContainer = styled.div`
height: 35%;
padding: 10px;
border-bottom: 1px solid white;
@media(max-width: 992px) {
        height: 100%;
    }
`;

const IntroduceContent = styled.div`
padding: 10px;
    @media(max-width: 992px) {
    }
`;

const IntroduceTitle = styled.div`
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