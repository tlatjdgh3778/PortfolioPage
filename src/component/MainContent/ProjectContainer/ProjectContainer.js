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

    @media ${(props) => props.theme.device.TabletPortrait} {
        margin: 10px 0;
    }
`;

const ProjectFilterContainer = styled.div`
padding: 10px;
`;

const FilterBtn = styled.button`
outline: none;
border: none;
color: ${(props) => props.theme.color.fontColor};
background-color: inherit;
font-size: ${(props) => props.theme.fontSize.md};
cursor: pointer;
margin-right: 10px;
font-weight: 600;
padding: 5px;
border-radius: 5px;

    &:active,
    &:hover {
        background-color: ${(props) => props.theme.color.highlightColor};
    }
`;

const ProjectList = styled.div`
margin: 10px;
display: flex;
flex-wrap: wrap;
`;

function ProjectContainer() {
    const [projects, setProjects] = useState(project_data);
    const [button, setButton] = useState('All');

    const clickFilter = (name) => {
        const new_array = project_data.filter(project => project.category.includes(name));
        setProjects(new_array);
        setButton(name);
    }
    return(

        <ProjectContainerStyle>
            <ProjectFilterContainer>
                <FilterBtn 
                onClick={() => {setProjects(project_data); setButton('All');}}>All</FilterBtn>
                <FilterBtn 
                onClick={() => clickFilter('React')}>React</FilterBtn>
                <FilterBtn 
                onClick={() => clickFilter('VanilaJS')}>VanilaJS</FilterBtn>
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