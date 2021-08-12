import styled from "styled-components";

const AboutStyle = styled.div`
    display: flex;
    width: 90%;
    height: 100%;
    border-radius: 10px;
    margin: 20px 0;
    line-height: 30px;

    @media ${({ theme }) => theme.device.TabletLandscape} {
        flex-direction: column;
    }
    @media ${({ theme }) => theme.device.TabletPortrait} {
        margin: 10px 0;
    }
`;

const IntroandEdu = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 85%;

    @media ${({ theme }) => theme.device.TabletLandscape} {
        width: 100%;
    }
`;

const SkillandExp = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 85%;

    @media ${({ theme }) => theme.device.TabletLandscape} {
        width: 100%;
    }
`;

export { AboutStyle, IntroandEdu, SkillandExp };
