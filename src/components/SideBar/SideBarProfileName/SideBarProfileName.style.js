import styled from 'styled-components';

const ProfileName = styled.div`
    padding: 10px;
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: 700;
`;

const ProfileJob = styled.div`
    font-size: ${(props) => props.theme.fontSize.lg};
    padding: 10px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.color.highlightColor};

    @media ${(props) => props.theme.device.TabletLaptops} {
        font-size: ${(props) => props.theme.fontSize.md};
    }
`;

export { ProfileName, ProfileJob };