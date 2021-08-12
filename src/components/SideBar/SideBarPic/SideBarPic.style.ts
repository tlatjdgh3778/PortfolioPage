import styled from "styled-components";
import seongho_pic from "components/SideBar/SideBarPic/seongho_pic.jpg";

const PicStyle = styled.img.attrs({
    src: seongho_pic,
})`
    margin-top: 50px;
    max-width: 100%;
    border-radius: 30%;
    border: 1px solid ${({ theme }) => theme.color.fontColor};
    height: 20%;

    @media ${({ theme }) => theme.device.TabletLandscape} {
        height: 25%;
    }
`;

export { PicStyle };
