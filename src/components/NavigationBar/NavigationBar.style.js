import styled from 'styled-components';

const NavigationBarStyle = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 20px 0;

    @media ${(props) => props.theme.device.TabletPortrait} {
            margin: 10px 0;
    } 
`;


const NavigationBarName = styled.div`
    font-size: 40px;
    font-weight: 700;
    padding-bottom: 5px;
    border-bottom: 3px solid ${(props) => props.theme.color.fontColor};

    @media ${(props) => props.theme.device.TabletPortrait} {
        font-size: ${(props) => props.theme.fontSize.xxl};
    } 
`;

const NavigationBarList = styled.div`
    display: flex;
    align-items: center;
    font-size: ${(props) => props.theme.fontSize.lg};

    @media ${(props) => props.theme.device.TabletPortrait} {
        font-size: ${(props) => props.theme.fontSize.sm};
    }
`;

const Btn = styled.button`
    margin-right: 10px;
    outline: none;
    border: none;
    color: ${(props) => props.theme.color.fontColor};
    background-color: inherit;
    font-size: ${(props) => props.theme.fontSize.lg};
    cursor: pointer;
    font-weight: 600;
    padding: 10px;
    border-radius: 10px;

    &:active {
        background-color: ${(props) => props.theme.color.highlightColor};
    }
`;

export { NavigationBarStyle, NavigationBarName, NavigationBarList, Btn };