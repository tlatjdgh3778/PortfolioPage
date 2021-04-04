import React from 'react';
import styled from 'styled-components';

const MainContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid blue;
  height: 100%;
  width: 75%;
  border-radius: 30px;

  @media(max-width: 992px) {
      width: 95%;
  }
`;

function MainContent(){
    return(
        <MainContentStyle>Main</MainContentStyle>
    );
}
export default MainContent;