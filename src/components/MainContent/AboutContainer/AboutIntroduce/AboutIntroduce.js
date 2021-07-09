import React from 'react';
import styled from 'styled-components';

const IntroduceContainer = styled.div`
height: 50%;
padding: 5px;

@media ${(props) => props.theme.device.TabletLandscape} {
        height: 100%;
    }
`;

const IntroduceContent = styled.div`
padding: 0 10px;
word-break: break-all;
overflow-y: scroll;
height: 70%;
`;

const IntroduceTitle = styled.h2`
display: inline-block;
font-size: ${(props) => props.theme.fontSize.lg};
padding-bottom: 10px;
`;

function AboutIntroduce() {

    return(
        <IntroduceContainer>
        <IntroduceTitle>Introduce</IntroduceTitle>
        <IntroduceContent>실력 있고 인정받는 프론트 엔드 개발자를 꿈꾸고 있는 신입 개발자입니다. React 와 Styled Components 사용하여 깔끔한 코드를 작성하기 위해 노력하고 있습니다.
        </IntroduceContent>
        </IntroduceContainer>
    );
}

export default AboutIntroduce;