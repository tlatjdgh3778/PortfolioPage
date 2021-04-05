import React from 'react';
import styled from 'styled-components';

const AboutContainerStyle = styled.div`
width: 90%;
height: 100%;
border: 1px solid blue;
margin: 20px 0;

@media(max-width: 768px) {
    margin: 10px 0;
  }
`;

function AboutContainer() {

    return(
        <AboutContainerStyle>About의 내용</AboutContainerStyle>
    );
}

export default AboutContainer;