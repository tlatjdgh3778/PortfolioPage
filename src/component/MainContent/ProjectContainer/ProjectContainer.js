import React from 'react';
import styled from 'styled-components';
import {Github}  from '@styled-icons/boxicons-logos';
import pic from '../ProjectContainer/pic.png';

const ProjectContainerStyle = styled.div`
width: 90%;
height: 80%;
border-radius: 5px;
margin: 20px 0;
overflow-y: scroll;

    @media(max-width: 768px) {
        margin: 10px 0;
    }
`;

const ProjectFilterContainer = styled.div`
padding: 10px;
`;

const AllFilterBtn = styled.button`
outline: none;
border: none;
color: black;
background-color: inherit;
font-size: 16px;
cursor: pointer;
margin-right: 10px;
font-weight: 600;
`;
const ReactFilterBtn = styled.button`
margin-right: 10px;
outline: none;
border: none;
color: black;
background-color: inherit;
font-size: 16px;
cursor: pointer;
font-weight: 600;
`;
const VanilaJSFilterBtn = styled.button`
margin-right: 10px;
outline: none;
border: none;
color: black;
background-color: inherit;
font-size: 16px;
cursor: pointer;
font-weight: 600;
`;



const ProjectList = styled.div`
margin: 10px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

const ListContainer = styled.div`
/* display: flex;
flex-direction: column; */
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
border-radius: 15px;
cursor: pointer;

    &:hover {
        transform: scale(1.1);
        transition: all ease 0.5s;
    }

    @media(max-width: 992px) {
    }
`;

const ProjectGithub = styled(Github)`
width: 30px;
height: 30px;
margin-right: 10px;
cursor: pointer;

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