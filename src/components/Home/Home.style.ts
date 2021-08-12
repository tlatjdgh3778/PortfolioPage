import styled from "styled-components";

const HomeStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 9vh auto;
    max-width: 1200px;
    height: 78vh;

    @media ${({ theme }) => theme.device.Laptops} {
        max-width: 992px;
    }
    @media ${({ theme }) => theme.device.TabletLandscape} {
        width: 768px;
        height: 800px;
        flex-direction: column;
    }
    @media ${({ theme }) => theme.device.TabletPortrait} {
        width: auto;
        flex-direction: column;
    }
`;

export { HomeStyle };
