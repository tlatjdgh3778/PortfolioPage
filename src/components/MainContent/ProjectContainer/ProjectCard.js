import React from 'react';
import styled from 'styled-components';
import {Github}  from '@styled-icons/boxicons-logos';

const ListContainer = styled.div`
text-align: center;
width: 30%;
margin: 15px 10px;
padding: 5px 0;

    @media ${(props) => props.theme.device.TabletLandscape} {
        width: 45%;
    }

    @media ${(props) => props.theme.device.TabletPortrait} {
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
border: 2px solid ${(props) => props.theme.color.fontColor};

    &:hover {
        transform: scale(1.05);
        transition: all ease 0.5s;
    }
`;
const ProjectLink = styled(ProjectImg.withComponent('a'))`
border: none;
`;

const ProjectGithub = styled(Github)`
width: 30px;
height: 30px;
cursor: pointer;
`;

const ProjectGithubLink = styled(ProjectGithub.withComponent('a'))`
color: ${(props) => props.theme.color.fontColor};
`;

const ProjectName = styled.span`
`;

function ProjectCard({ project }){
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