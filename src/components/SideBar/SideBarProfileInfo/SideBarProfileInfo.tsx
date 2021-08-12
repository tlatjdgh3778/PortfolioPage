import React from 'react';
import * as S from './SideBarProfileInfo.style';

const SideBarProfileInfo = () => {
    console.log('SideBarProfileInfo Render');
    return(
        <S.ProfileInfoContainer>
            <S.GithubLink target="_blank" href="https://github.com/tlatjdgh3778">
                <S.GithubIcon/>
                <S.GithubSpan>github</S.GithubSpan>
            </S.GithubLink>
            <S.ProfileEmail>tjdgh3778@gmail.com</S.ProfileEmail>
            <S.ProfilePhone>+82 10 4685 3778</S.ProfilePhone>
        </S.ProfileInfoContainer>
    );
}

export default SideBarProfileInfo;