import React from 'react';
import styled from 'styled-components';
import { Github } from '@styled-icons/boxicons-logos';

const ProfileInfoContainer = styled.div`
background-color: ${(props) => props.theme.color.highlightColor};
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
        background-color: ${(props) => props.theme.color.hoverColor};
    }
`;
const GithubLink = styled(ProfileGithubContainer.withComponent('a'))`
color: ${(props) => props.theme.color.fontColor};
text-decoration: none;
`;

const GithubIcon = styled(Github)`
width: 40px;
height: 40px;
`;

const GithubSpan = styled.span`
font-size: ${(props) => props.theme.fontSize.lg};
`;

const ProfileEmail = styled.div`
margin: 10px 0;
font-size: ${(props) => props.theme.fontSize.md};
    @media ${(props) => props.theme.device.Laptops} {
        font-size: ${(props) => props.theme.fontSize.sm};
    }
`;

const ProfilePhone = styled.div`
margin: 10px 0;
    @media ${(props) => props.theme.device.Laptops} {
            font-size: ${(props) => props.theme.fontSize.sm};
        }
`;

function SideBarProfileInfo() {

    return(
        <ProfileInfoContainer>

            <GithubLink target="_blank" href="https://github.com/tlatjdgh3778">
                <GithubIcon/>
                <GithubSpan>github</GithubSpan>
            </GithubLink>
            <ProfileEmail>tjdgh3778@gmail.com</ProfileEmail>
            <ProfilePhone>+82 10 4685 3778</ProfilePhone>
        </ProfileInfoContainer>
    );
}

export default SideBarProfileInfo;