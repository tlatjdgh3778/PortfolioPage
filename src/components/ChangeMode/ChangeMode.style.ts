import styled from "styled-components";

const ModeBtn = styled.button`
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: bold;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.color.modalBgColor};
    color: ${({ theme }) => theme.color.modalFontColor};
    padding: 4px 12px;
    border-radius: 8px;
    position: fixed;
    top: 1%;
    left: 1%;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export { ModeBtn };
