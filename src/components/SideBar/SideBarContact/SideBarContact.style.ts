import styled from "styled-components";

const SideBarEmailContact = styled.button`
    color: ${({ theme }) => theme.color.fontColor};
    background-color: ${({ theme }) => theme.color.highlightColor};
    width: 80%;
    margin: 10px 0;
    padding: 10px;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    outline: none;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`;

export { SideBarEmailContact };
