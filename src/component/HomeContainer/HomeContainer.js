import React from 'react';
import styled from 'styled-components';
import MainContent from '../MainContent/MainContent';
import SideBar from '../SideBar/SideBer';

const HomeContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10vh auto;
  max-width: 1200px;
  height: 80vh;
  border-radius: 30px;
  
  @media(max-width: 1200px) {
    max-width: 992px;
  }
  @media(max-width: 992px) {
    width: 768px;
    flex-direction: column;
    height: 100vh;
  }
  @media(max-width: 768px) {
    width: 400px;
    flex-direction: column;
    height: 100vh;
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