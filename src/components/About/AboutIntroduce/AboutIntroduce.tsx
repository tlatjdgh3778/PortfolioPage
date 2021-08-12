import React from 'react';
import * as S from './AboutIntroduce.style';
import * as GS from 'style/Component.style';

const AboutIntroduce = () => {
    console.log('AboutIntroduce Render');
    return(
        <GS.AboutContentContainer>
            <GS.AboutContentTitle>Introduce</GS.AboutContentTitle>
            <GS.AboutContent>
                <S.Introduce>
                    실력 있고 인정받는 프론트 엔드 개발자를 꿈꾸고 있는 신입 개발자입니다. React 와 react-redux 를 주로 사용하고 스타일링은 Styled-component 와 Material-UI를 사용하고 있습니다. 새로운 기술에 대해 알게 되는 것을 즐겁게 생각합니다.
                </S.Introduce>
            </GS.AboutContent>
        </GS.AboutContentContainer>
    );
}

export default AboutIntroduce;