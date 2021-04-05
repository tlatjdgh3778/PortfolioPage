import React, { useState } from 'react';
import styled from 'styled-components';

const NavigationBarNameStyle = styled.div`
border: 1px solid green;
font-size: 40px;
font-weight: 700;

@media(max-width: 768px) {
    font-size: 32px;
  }
`;


function NavigationBarName() {

    return(
        <NavigationBarNameStyle>About</NavigationBarNameStyle>
    );
}

export default NavigationBarName;