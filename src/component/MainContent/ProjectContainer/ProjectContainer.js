import React from 'react';
import styled from 'styled-components';

const ProjectContainerStyle = styled.div`
width: 90%;
height: 100%;
border: 1px solid blue;
margin: 20px 0;

@media(max-width: 768px) {
    margin: 10px 0;
  }
`;

function ProjectContainer() {

    return(
        <ProjectContainerStyle>Project의 내용</ProjectContainerStyle>
    );
}

export default ProjectContainer;