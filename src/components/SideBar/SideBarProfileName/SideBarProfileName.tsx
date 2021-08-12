import React from 'react';
import * as S from './SideBarProfileName.style';

const SideBarProfileName = () => {
    console.log('SideBarProfileName Render');
    return(
        <>
            <S.ProfileName>심성호</S.ProfileName>
            <S.ProfileJob>Frontend Developer</S.ProfileJob>
        </>
    );
}

export default SideBarProfileName;