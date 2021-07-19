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
                    실력 있고 인정받는 프론트 엔드 개발자를 꿈꾸고 있는 신입 개발자입니다. React 와 Styled Components 사용하여 깔끔한 코드를 작성하기 위해 노력하고 있습니다.
                </S.Introduce>
            </GS.AboutContent>
        </GS.AboutContentContainer>
    );
}

export default AboutIntroduce;