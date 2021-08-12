import React from 'react';
import * as S from './SideBarSocialMedia.style';

const SideBarSocialMedia = () => {

    console.log('SideBarSocialMedia Render');
    return(
        <S.SocialMediaContainer>
            <S.InstagramLink target="_blank" href="https://www.instagram.com/seongho.shim/">
                <S.InstagramIcon />
            </S.InstagramLink>
            <S.BlogLink target="_blank" href="https://velog.io/@tlatjdgh3778">
                <S.BlogIcon />
            </S.BlogLink>
        </S.SocialMediaContainer>
    );
}

export default SideBarSocialMedia;