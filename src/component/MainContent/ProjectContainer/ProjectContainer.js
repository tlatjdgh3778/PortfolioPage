import React from 'react';
import styled from 'styled-components';
import {Github}  from '@styled-icons/boxicons-logos';
import pic from '../ProjectContainer/pic.png';

const ProjectContainerStyle = styled.div`
width: 90%;
height: 80%;
border: 1px solid blue;
margin: 20px 0;
overflow-y: scroll;

    @media(max-width: 768px) {
        margin: 10px 0;
    }
`;

const ProjectFilterContainer = styled.div`
padding: 10px;
border: 1px solid red;
`;

const AllFilterBtn = styled.button`
margin-right: 10px;
`;
const ReactFilterBtn = styled.button`
margin-right: 10px;
`;
const VanilaJSFilterBtn = styled.button`
margin-right: 10px;
`;



const ProjectList = styled.div`
border: 1px solid white;
margin: 10px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

const ListContainer = styled.div`
/* display: flex;
flex-direction: column; */
border: 1px solid aqua;
text-align: center;
width: 27%;
margin: 15px 10px;

    @media(max-width: 992px) {
        width: 45%;
    }

    @media(max-width: 768px) {
         width: 100%;
  }
`;

const ProjectImg = styled.img.attrs({
    src: pic,
})`
width: 100%;
    @media(max-width: 992px) {
    }
`;

const ProjectGithub = styled(Github)`
width: 30px;
height: 30px;
margin-right: 10px;
`;

const ProjectName = styled.span`
`;
function ProjectContainer() {

    return(
        <ProjectContainerStyle>
            <ProjectFilterContainer>
                <AllFilterBtn>All</AllFilterBtn>
                <ReactFilterBtn>React</ReactFilterBtn>
                <VanilaJSFilterBtn>VanilaJS</VanilaJSFilterBtn>
            </ProjectFilterContainer>
            <ProjectList>
                <ListContainer>
                    <ProjectImg></ProjectImg>
                    <ProjectGithub></ProjectGithub>
                    <ProjectName>Project2</ProjectName>
                </ListContainer>
                <ListContainer>
                    <ProjectImg></ProjectImg>
                    <ProjectGithub></ProjectGithub>
                    <ProjectName>Project2</ProjectName>
                </ListContainer>
                <ListContainer>
                    <ProjectImg></ProjectImg>
                    <ProjectGithub></ProjectGithub>
                    <ProjectName>Project2</ProjectName>
                </ListContainer>
                <ListContainer>
                    <ProjectImg></ProjectImg>
                    <ProjectGithub></ProjectGithub>
                    <ProjectName>Project2</ProjectName>
                </ListContainer>
                <ListContainer>
                    <ProjectImg></ProjectImg>
                    <ProjectGithub></ProjectGithub>
                    <ProjectName>Project2</ProjectName>
                </ListContainer>
                <ListContainer>
                    <ProjectImg></ProjectImg>
                    <ProjectGithub></ProjectGithub>
                    <ProjectName>Project2</ProjectName>
                </ListContainer>
                <ListContainer>
                    <ProjectImg></ProjectImg>
                    <ProjectGithub></ProjectGithub>
                    <ProjectName>Project2</ProjectName>
                </ListContainer>
            </ProjectList>
        </ProjectContainerStyle>
    );
}

export default ProjectContainer;