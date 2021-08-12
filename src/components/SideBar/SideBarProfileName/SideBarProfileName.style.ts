import styled from "styled-components";

const ProfileName = styled.div`
    padding: 10px;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 700;
`;

const ProfileJob = styled.div`
    font-size: ${({ theme }) => theme.fontSize.lg};
    padding: 10px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.highlightColor};

    @media ${({ theme }) => theme.device.TabletLandscape} {
        font-size: ${({ theme }) => theme.fontSize.md};
    }
`;

export { ProfileName, ProfileJob };
