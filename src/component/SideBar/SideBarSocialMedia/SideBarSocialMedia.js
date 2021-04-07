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
const BlogIcon = styled(Blog)`
cursor: pointer;
width: 30px;
height: 30px;

    &:hover {
        transform: scale(1.1);
    }
`; 

function SideBarSocialMedia() {

    return(
        <SocialMediaContainer>
            <InstagramIcon />
            <BlogIcon />
        </SocialMediaContainer>
    );
}

export default SideBarSocialMedia;