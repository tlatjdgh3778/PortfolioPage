import styled from 'styled-components';

const EducationContainer = styled.div`
    height: 50%;
    padding: 5px;

    @media ${(props) => props.theme.device.TabletLandscape} {
        height: 100%;
    }
`;
const EducationWrapper = styled.div`
    padding: 0 10px;
    overflow-y: scroll;
    height: 70%;
`;

const EducationTitle = styled.h2`
    display: inline-block;
    font-size: ${(props) => props.theme.fontSize.lg};
    padding-bottom: 10px;
`;

const EducationName = styled.p`
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: 700;
    margin-bottom: 10px;
`;

const EducationContent = styled.p`
    padding: 5px;
`;

export { EducationContainer, EducationWrapper, EducationTitle, EducationName, EducationContent };