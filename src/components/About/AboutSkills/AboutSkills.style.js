import styled from 'styled-components';

const SkillsContainer = styled.div`
    height: 50%;
    padding: 5px;

    @media ${(props) => props.theme.device.TabletLandscape} {
        height: 100%;
    }
`;

const SkillsTitle = styled.h2`
    display: inline-block;
    font-size: ${(props) => props.theme.fontSize.lg};
    padding-bottom: 10px;
`;

const SkillsContent = styled.div`
    padding: 0 10px 10px;
`;

export { SkillsContainer, SkillsTitle, SkillsContent }; 