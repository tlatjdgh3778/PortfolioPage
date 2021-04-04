import React from 'react';
import styled from 'styled-components';
import {Github}  from '@styled-icons/boxicons-logos';

const ProfileInfoContainer = styled.div`
border: 1px solid blue;
margin-top: 50px;
width: 100%;
text-align: center;
`;

const ProfileGithubContainer = styled.div`
margin: 10px 0;
border: 1px solid red;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
`;

const GithubIcon = styled(Github)`
width: 40px;
height: 40px;
`;

const GithubSpan = styled.span`
font-size: 24px;
`;

const ProfileEmail = styled.div`
border: 1px solid red;
margin: 10px 0;
font-size: 20px;
    @media(max-width: 1200px) {
        font-size: 18px;
    }
`;

const ProfilePhone = styled.div`
border: 1px solid red;
margin: 10px 0;
    @media(max-width: 1200px) {
            font-size: 18px;
        }
`;

function SideBarProfileInfo() {

    return(
        <ProfileInfoContainer>

            <ProfileGithubContainer>
                <GithubIcon/>
                <GithubSpan>github</GithubSpan>
            </ProfileGithubContainer>
            <ProfileEmail>tjdgh3778@gmail.com</ProfileEmail>
            <ProfilePhone>+82 10 4508 3778</ProfilePhone>
        </ProfileInfoContainer>
    );
}

export default SideBarProfileInfo;