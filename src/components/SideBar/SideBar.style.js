import styled from 'styled-components';

const SideBarStyle = styled.div`
    color: ${(props) => props.theme.color.fontColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid ${(props) => props.theme.color.fontColor};
    background-color: ${(props) => props.theme.color.bgColor};
    height: 100%;
    border-radius: 30px;
    width: 21%;
    box-shadow: 0 0 10px ${(props) => props.theme.color.highlightColor};

        @media ${(props) => props.theme.device.TabletLandscape} {
            width: 95%;
        }
`;

export { SideBarStyle };