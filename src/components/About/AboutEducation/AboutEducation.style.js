import styled from 'styled-components';

const EducationName = styled.p`
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: 700;
    margin-bottom: 10px;
`;

const EducationContent = styled.p`
    padding: 5px;
`;

export { EducationName, EducationContent };