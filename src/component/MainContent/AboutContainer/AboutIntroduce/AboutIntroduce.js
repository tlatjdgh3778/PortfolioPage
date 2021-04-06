import React from 'react';
import styled from 'styled-components';

const IntroduceStyle = styled.div`
border: 1px solid blue;
height: 35%;
padding: 10px;
    @media(max-width: 992px) {
    }
`;

function AboutIntroduce() {

    return(
        <IntroduceStyle>저는 누구입니다.</IntroduceStyle>
    );
}

export default AboutIntroduce;