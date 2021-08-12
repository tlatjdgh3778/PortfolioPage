import React from 'react';
import SideBarPic from './SideBarPic/SideBarPic';
import SideBarProfileName from './SideBarProfileName/SideBarProfileName';
import SideBarProfileInfo from './SideBarProfileInfo/SideBarProfileInfo';
import SideBarSocialMedia from './SideBarSocialMedia/SideBarSocialMedia';
import SideBarContact from './SideBarContact/SideBarContact';
import * as S from './SideBar.style';

const SideBar = () => {
    console.log('SideBar Render');
    return(
        <S.SideBarStyle>
            <SideBarPic></SideBarPic>
            <SideBarProfileName></SideBarProfileName>
            <SideBarProfileInfo></SideBarProfileInfo>
            <SideBarSocialMedia></SideBarSocialMedia>
            <SideBarContact></SideBarContact>
        </S.SideBarStyle>
    );
}

export default SideBar; 