import React from 'react';
import styled from 'styled-components';
import SideBarPic from './SideBarPic/SideBarPic';
import SideBarProfileName from './SideBarProfileName/SideBarProfileName';
import SideBarProfileInfo from './SideBarProfileInfo/SideBarProfileInfo';
import SideBarSocialMedia from './SideBarSocialMedia/SideBarSocialMedia';
import SideBarContact from './SideBarContact/SideBarContact';

const SideBarStyle = styled.div`
color: ${(props) => props.theme.color.fontColor};
display: flex;
flex-direction: column;
align-items: center;
border: 2px solid ${(props) => props.theme.color.fontColor};
background-color: ${(props) => props.theme.color.bgColor};
height: 100%;
border-radius: 30px;
width: 20%;

    @media ${({ theme }) => theme.device.TabletLandscape} {
        width: 95%;
        height: auto;
    }
`;

function SideBar() {
    return(
        <SideBarStyle>
            <SideBarPic></SideBarPic>
            <SideBarProfileName></SideBarProfileName>
            <SideBarProfileInfo></SideBarProfileInfo>
            <SideBarSocialMedia></SideBarSocialMedia>
            <SideBarContact></SideBarContact>
        </SideBarStyle>
    );
}

export default SideBar;