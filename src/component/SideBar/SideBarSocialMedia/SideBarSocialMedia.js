import React from 'react';
import styled from 'styled-components';
import {FacebookCircle, InstagramAlt }  from '@styled-icons/boxicons-logos';
import { Blog }  from '@styled-icons/fa-solid';

const SocialMediaContainer = styled.div`
margin: 15px 0;
border: 1px solid red;
width: 90%;
display: flex;
justify-content: space-around;
align-items: center;
`;
const FacebookIcon = styled(FacebookCircle)`
cursor: pointer;
width: 30px;
height: 30px;
`; 
const InstagramIcon = styled(InstagramAlt)`
cursor: pointer;
width: 30px;
height: 30px;
`; 
const BlogIcon = styled(Blog)`
cursor: pointer;
width: 30px;
height: 30px;
`; 

function SideBarSocialMedia() {

    return(
        <SocialMediaContainer>
            <FacebookIcon />
            <InstagramIcon />
            <BlogIcon />
        </SocialMediaContainer>
    );
}

export default SideBarSocialMedia;