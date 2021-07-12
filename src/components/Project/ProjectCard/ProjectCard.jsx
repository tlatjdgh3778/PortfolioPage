import React from 'react';
import * as S from './ProjectCard.style';

const ProjectCard = ({ project }) => {

    const project_url = project.project_url;
    const github_url = project.github_url;
    
    return(
            <S.ListContainer>
                <S.ProjectLink target="_blank" href={project_url}>
                    <S.ProjectImg src={project.image}></S.ProjectImg>
                </S.ProjectLink>
                <S.ProjectGithubLink target="_blank" href={github_url}>
                    <S.ProjectGithub></S.ProjectGithub>
                </S.ProjectGithubLink>
                    <S.ProjectName>{project.name}</S.ProjectName>
            </S.ListContainer>
    );
}

export default ProjectCard;