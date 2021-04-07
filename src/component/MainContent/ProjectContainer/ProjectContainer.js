import React from 'react';
import styled from 'styled-components';
import {Github}  from '@styled-icons/boxicons-logos';
import pic from '../ProjectContainer/pic.png';
import { device } from '../../../style/variable';

const ProjectContainerStyle = styled.div`
width: 90%;
height: 80%;
border-radius: 5px;
margin: 20px 0;
overflow-y: scroll;

    @media ${device.TabletPortrait} {
        margin: 10px 0;
    }
`;

const ProjectFilterContainer = styled.div`
padding: 10px;
`;

const FilterBtn = styled.button`
outline: none;
border: none;
color: black;
background-color: inherit;
font-size: 16px;
cursor: pointer;
margin-right: 10px;
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

    @media ${device.TabletLandscape} {
        width: 45%;
    }

    @media ${device.TabletPortrait} {
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
                <FilterBtn value="All">All</FilterBtn>
                <FilterBtn value="React">React</FilterBtn>
                <FilterBtn value="VanilaJS">VanilaJS</FilterBtn>
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