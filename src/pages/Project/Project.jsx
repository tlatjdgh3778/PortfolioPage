import React, { useState } from 'react';
import projectData from 'data/projectData';
import { ProjectCard } from 'components/Project/index';
import * as S from './Project.style';

const initialState = projectData;

const Project = () => {
    console.log('Project Render');
    const [projects, setProjects] = useState(initialState);
    const [filter, setFilter] = useState('All');

    const clickFilter = (name) => {
        if(filter !== name){
            if(name === 'All'){
                setProjects(initialState);
            }else{
                // filter 함수로 배열을 새로운 배열을 만들면 리렌더링 할 때,
                // 배열 안의 내용이 동일해도 false이므로 렌더링을 한다.
                // => filter state 를 둬서 클릭한(React, VanilaJS ...) 값(name)과 그 전의 filter가 
                // 다르면 project 목록 출력.
                // 같으면 렌더링 하지 않는다.
                setProjects(initialState.filter(project => project.category.includes(name)));
            }
        setFilter(name);
        }
    };
    // const memoizeFilter = useMemo(() => clickFilter(name), []);

    return(

        <S.ProjectStyle>
            <S.ProjectFilter>
                <S.FilterBtn 
                onClick={e => clickFilter(e.target.childNodes[0].data)}>All</S.FilterBtn>
                <S.FilterBtn 
                onClick={e => clickFilter(e.target.childNodes[0].data)}>React</S.FilterBtn>
                <S.FilterBtn 
                onClick={e => clickFilter(e.target.childNodes[0].data)}>VanilaJS</S.FilterBtn>
            </S.ProjectFilter>
                <S.ProjectList>
                    {projects.map((project)=>{
                        return <ProjectCard key={project.name} project={project}></ProjectCard>
                    })}
                </S.ProjectList>
        </S.ProjectStyle>
    );
}

export default Project;