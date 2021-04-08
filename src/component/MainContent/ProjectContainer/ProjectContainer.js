import React, { useState } from 'react';
import styled from 'styled-components';
import {Github}  from '@styled-icons/boxicons-logos';
import project_data from '../../data_folder/project_data';
import ProjectCard from './ProjectCard';

const ProjectContainerStyle = styled.div`
width: 90%;
height: 80%;
border-radius: 5px;
margin: 20px 0;
overflow-y: scroll;

    @media ${({ theme }) => theme.device.TabletPortrait} {
        margin: 10px 0;
    }
`;

const ProjectFilterContainer = styled.div`
padding: 10px;
`;

const FilterBtn = styled.button`
outline: none;
border: none;
color: ${({ theme }) => theme.color.black};
background-color: inherit;
font-size: ${({ theme }) => theme.fontSize.md};
cursor: pointer;
margin-right: 10px;
font-weight: 600;
`;

const ProjectList = styled.div`
margin: 10px;
display: flex;
flex-wrap: wrap;
`;

function ProjectContainer() {
    const [projects, setProjects] = useState(project_data);

    const clickFilter = (name) => {
        const new_array = project_data.filter(project => project.category.includes(name));
        console.log(new_array);
        setProjects(new_array);
    }
    return(

        <ProjectContainerStyle>
            <ProjectFilterContainer>
                <FilterBtn onClick={() => setProjects(project_data)}>All</FilterBtn>
                <FilterBtn onClick={() => clickFilter('React')}>React</FilterBtn>
                <FilterBtn onClick={() => clickFilter('VanilaJS')}>VanilaJS</FilterBtn>
            </ProjectFilterContainer>
            <ProjectList>
                {projects.map((project)=>{
                    return <ProjectCard key={project.name} project={project}></ProjectCard>
                })}
            </ProjectList>
        </ProjectContainerStyle>
    );
}

export default ProjectContainer;