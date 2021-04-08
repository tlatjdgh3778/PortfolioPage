import React, { useState } from 'react';
import styled from 'styled-components';
import {Github}  from '@styled-icons/boxicons-logos';

const ListContainer = styled.div`
text-align: center;
width: 30%;
margin: 15px 10px;

    @media ${({ theme }) => theme.device.TabletLandscape} {
        width: 45%;
    }

    @media ${({ theme }) => theme.device.TabletPortrait} {
        width: 100%;
    }
`;

const ProjectImg = styled.img.attrs({
    alt: "project_img"
})`
height: 100%;
width: 100%;
border-radius: 15px;
cursor: pointer;

    &:hover {
        transform: scale(1.05);
        transition: all ease 0.5s;
    }
`;
const ProjectLink = styled(ProjectImg.withComponent('a'))`
`;

const ProjectGithub = styled(Github)`
width: 30px;
height: 30px;
cursor: pointer;
`;

const ProjectGithubLink = styled(ProjectGithub.withComponent('a'))`
color: ${({ theme }) => theme.color.black};
`;

const ProjectName = styled.span`
`;

function ProjectCard({key, project}){
const project_url = project.project_url;
const github_url = project.github_url;
    return(
            <ListContainer>
                <ProjectLink target="_blank" href={project_url}>
                    <ProjectImg src={project.image}></ProjectImg>
                </ProjectLink>
                <ProjectGithubLink target="_blank" href={github_url}>
                    <ProjectGithub></ProjectGithub>
                </ProjectGithubLink>
                    <ProjectName>{project.name}</ProjectName>
            </ListContainer>
    );
}

export default ProjectCard;