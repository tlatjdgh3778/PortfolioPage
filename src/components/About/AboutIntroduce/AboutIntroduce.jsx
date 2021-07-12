import React from 'react';
import * as S from './AboutIntroduce.style';

const AboutIntroduce = () => {

    return(
        <S.IntroduceContainer>
            <S.IntroduceTitle>Introduce</S.IntroduceTitle>
            <S.IntroduceContent>실력 있고 인정받는 프론트 엔드 개발자를 꿈꾸고 있는 신입 개발자입니다. React 와 Styled Components 사용하여 깔끔한 코드를 작성하기 위해 노력하고 있습니다.
            </S.IntroduceContent>
        </S.IntroduceContainer>
    );
}

export default AboutIntroduce;