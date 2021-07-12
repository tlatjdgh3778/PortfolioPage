import styled from 'styled-components';

const SideBarEmailContact = styled.button`
    color: ${(props) => props.theme.color.fontColor};
    background-color: ${(props) => props.theme.color.highlightColor};
    width: 80%;
    margin: 10px 0;
    padding: 10px;
    text-align: center;
    font-size: ${(props) => props.theme.fontSize.xxl};
    outline: none;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`;

export { SideBarEmailContact };