import styled from "styled-components";

const SideBarStyle = styled.div`
    color: ${({ theme }) => theme.color.fontColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid ${({ theme }) => theme.color.fontColor};
    background-color: ${({ theme }) => theme.color.bgColor};
    height: 100%;
    border-radius: 30px;
    width: 21%;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.highlightColor};

    @media ${({ theme }) => theme.device.TabletLandscape} {
        width: 95%;
    }
`;

export { SideBarStyle };
