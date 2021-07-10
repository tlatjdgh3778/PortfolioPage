import React from 'react';
import styled from 'styled-components';
import Main from 'components/Main/Main';
import SideBar from 'components/SideBar/SideBer';

const HomeStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 9vh auto;
  max-width: 1200px;
  height: 78vh;

  @media ${(props) => props.theme.device.Laptops} {
    max-width: 992px;
  }
  @media ${(props) => props.theme.device.TabletLandscape} {
    width: 768px;
    height: 800px;
    flex-direction: column;
  }
  @media ${(props) => props.theme.device.TabletPortrait} {
    width: auto;
    flex-direction: column;
  }
`;

const Home = () => {

    return(
        <HomeStyle>
            <SideBar></SideBar>
            <Main></Main>
        </HomeStyle>
    );
}

export default Home;