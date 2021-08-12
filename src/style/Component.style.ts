import styled from "styled-components";

const MainStyle = styled.div`
    color: ${({ theme }) => theme.color.fontColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid ${({ theme }) => theme.color.fontColor};
    background-color: ${({ theme }) => theme.color.bgColor};
    height: 100%;
    width: 75%;
    border-radius: 30px;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.highlightColor};

    @media ${({ theme }) => theme.device.TabletLandscape} {
        width: 95%;
        margin: 30px 0;
        height: auto;
    }
`;

const AboutContentContainer = styled.div`
    height: 50%;
    padding: 5px;

    @media ${({ theme }) => theme.device.TabletLandscape} {
        height: 100%;
    }
`;

const AboutContentTitle = styled.div`
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSize.lg};
    padding-bottom: 10px;
`;

const AboutContent = styled.div`
    padding: 0 10px;
    word-break: break-all;
    overflow-y: scroll;
    height: 70%;
`;

export { MainStyle, AboutContentContainer, AboutContentTitle, AboutContent };
