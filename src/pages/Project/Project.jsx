import React, { useState } from 'react';
import projectData from 'data/projectData';
import { ProjectCard } from 'components/Project/index';
import * as S from './Project.style';

const Project = () => {
    const [projects, setProjects] = useState(projectData);
    console.log(projectData);

    const clickFilter = (name) => {
        const new_array = projects.filter(project => project.category.includes(name));
        setProjects(new_array);
    }
    return(

        <S.ProjectStyle>
            <S.ProjectFilter>
                <S.FilterBtn 
                onClick={() => {setProjects(projectData);}}>All</S.FilterBtn>
                <S.FilterBtn 
                onClick={() => clickFilter('React')}>React</S.FilterBtn>
                <S.FilterBtn 
                onClick={() => clickFilter('VanilaJS')}>VanilaJS</S.FilterBtn>
            </S.ProjectFilter>
                <S.ProjectList>
                    {projects.map((project, i)=>{
                        return <ProjectCard key={project.name} project={project}></ProjectCard>
                    })}
                </S.ProjectList>
        </S.ProjectStyle>
    );
}

export default Project;