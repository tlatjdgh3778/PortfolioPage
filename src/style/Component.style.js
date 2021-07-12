import styled from 'styled-components';

const MainStyle = styled.div`
    color: ${(props) => props.theme.color.fontColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid ${(props) => props.theme.color.fontColor};
    background-color: ${(props) => props.theme.color.bgColor};
    height: 100%;
    width: 75%;
    border-radius: 30px;
    box-shadow: 0 0 10px ${(props) => props.theme.color.highlightColor};

        @media ${(props) => props.theme.device.TabletLandscape} {
            width: 95%;
            margin: 30px 0;
            height: auto;
        }
`;

const AboutContentContainer = styled.div`
    height: 50%;
    padding: 5px;

    @media ${(props) => props.theme.device.TabletLandscape} {
        height: 100%;
    }
`;

const AboutContentTitle = styled.div`
    display: inline-block;
    font-size: ${(props) => props.theme.fontSize.lg};
    padding-bottom: 10px;
`;

const AboutContent = styled.div`
    padding: 0 10px;
    word-break: break-all;
    overflow-y: scroll;
    height: 70%;
`;

export { MainStyle, AboutContentContainer, AboutContentTitle, AboutContent };