import styled from 'styled-components';

const IntroduceContainer = styled.div`
    height: 50%;
    padding: 5px;

    @media ${(props) => props.theme.device.TabletLandscape} {
            height: 100%;
    }
`;

const IntroduceContent = styled.div`
    padding: 0 10px;
    word-break: break-all;
    overflow-y: scroll;
    height: 70%;
`;

const IntroduceTitle = styled.h2`
    display: inline-block;
    font-size: ${(props) => props.theme.fontSize.lg};
    padding-bottom: 10px;
`;

export { IntroduceContainer, IntroduceContent, IntroduceTitle };