import styled from "styled-components";

const ProjectStyle = styled.div`
    width: 90%;
    height: 80%;
    border-radius: 5px;
    margin: 20px 0;
    overflow-y: scroll;
    @media ${({ theme }) => theme.device.TabletLandscape} {
        height: 80vh;
    }
    @media ${({ theme }) => theme.device.TabletPortrait} {
        margin: 10px 0;
    }
`;

const ProjectFilter = styled.div`
    padding: 10px;
`;

const FilterBtn = styled.button`
    outline: none;
    border: none;
    color: ${({ theme }) => theme.color.fontColor};
    background-color: inherit;
    font-size: ${({ theme }) => theme.fontSize.md};
    cursor: pointer;
    margin-right: 10px;
    font-weight: 600;
    padding: 5px;
    border-radius: 5px;
    &:active,
    &:hover {
        background-color: ${({ theme }) => theme.color.highlightColor};
    }
`;

const ProjectList = styled.div`
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
`;

export { ProjectStyle, ProjectFilter, FilterBtn, ProjectList };
