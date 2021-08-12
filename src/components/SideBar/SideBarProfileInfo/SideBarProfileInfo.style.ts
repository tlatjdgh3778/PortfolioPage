import styled from "styled-components";
import { Github } from "@styled-icons/boxicons-logos";

const ProfileInfoContainer = styled.div`
    background-color: ${({ theme }) => theme.color.highlightColor};
    margin-top: 50px;
    width: 100%;
    text-align: center;
`;

const ProfileGithubContainer = styled.div`
    margin: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;

    &:hover {
        background-color: ${({ theme }) => theme.color.hoverColor};
    }
`;
const GithubLink = styled(ProfileGithubContainer.withComponent("a"))`
    color: ${({ theme }) => theme.color.fontColor};
    text-decoration: none;
`;

const GithubIcon = styled(Github)`
    width: 40px;
    height: 40px;
`;

const GithubSpan = styled.span`
    font-size: ${({ theme }) => theme.fontSize.lg};
`;

const ProfileEmail = styled.div`
    margin: 10px 0;
    font-size: ${({ theme }) => theme.fontSize.md};
    @media ${({ theme }) => theme.device.Laptops} {
        font-size: ${({ theme }) => theme.fontSize.sm};
    }
`;

const ProfilePhone = styled.div`
    margin: 10px 0;
    @media ${({ theme }) => theme.device.Laptops} {
        font-size: ${({ theme }) => theme.fontSize.sm};
    }
`;

export {
    ProfileInfoContainer,
    ProfileGithubContainer,
    GithubLink,
    GithubIcon,
    GithubSpan,
    ProfileEmail,
    ProfilePhone,
};
