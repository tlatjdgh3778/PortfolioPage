import React from 'react';
import styled from 'styled-components';
import bguna from '../SideBarPic/bguna.jpg';

const PicStyle = styled.img.attrs({
    src: bguna,
})`
margin-top: 50px;
max-width: 100%;
border-radius: 30%;
border: 1px solid black;
height: 20%;

    @media(max-width: 992px) {
        height: 30%;
    }
`;
function SideBarPic() {
return(
    <>
    <PicStyle></PicStyle>
    </>
);
}

export default SideBarPic;