import React from 'react';
import styled from 'styled-components';
import MainContent from '../MainContent/MainContent';
import SideBar from '../SideBar/SideBer';

const HomeContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 9vh auto;
  max-width: 1200px;
  height: 80vh;
  
  @media ${(props) => props.theme.device.Laptops} {
    max-width: 992px;
  }
  @media ${(props) => props.theme.device.TabletLandscape} {
    width: 768px;
    height: 800px;
    flex-direction: column;
  }
  @media ${(props) => props.theme.device.TabletPortrait} {
    width: 600px;
    flex-direction: column;
  }
`;

function HomeContainer() {

    return(
        <HomeContainerStyle>
            <SideBar></SideBar>
            <MainContent></MainContent>
        </HomeContainerStyle>
    );
}

export default HomeContainer;