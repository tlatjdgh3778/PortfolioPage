import React from 'react';
import styled from 'styled-components';
import { InstagramAlt }  from '@styled-icons/boxicons-logos';
import { Blog }  from '@styled-icons/fa-solid';

const SocialMediaContainer = styled.div`
margin: 30px 0;
width: 90%;
display: flex;
justify-content: space-around;
align-items: center;
`;

const InstagramIcon = styled(InstagramAlt)`
cursor: pointer;
width: 30px;
height: 30px;

    &:hover {
        transform: scale(1.1);
    }
`;

const InstagramLink = styled(InstagramIcon.withComponent('a'))`
color: ${(props) => props.theme.color.fontColor};
`;

const BlogIcon = styled(Blog)`
cursor: pointer;
width: 30px;
height: 30px;

    &:hover {
        transform: scale(1.1);
    }
`; 

const BlogLink = styled(BlogIcon.withComponent('a'))`
color: ${(props) => props.theme.color.fontColor};
`;

function SideBarSocialMedia() {

    return(
        <SocialMediaContainer>
            <InstagramLink target="_blank" href="https://www.instagram.com/seongho.shim/">
                <InstagramIcon />
            </InstagramLink>
            <BlogLink target="_blank" href="https://velog.io/@tlatjdgh3778">
                <BlogIcon />
            </BlogLink>
        </SocialMediaContainer>
    );
}

export default SideBarSocialMedia;