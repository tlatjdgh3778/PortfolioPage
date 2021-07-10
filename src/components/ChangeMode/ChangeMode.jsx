// light , dark Mode 구현할 버튼 만들기
import React from 'react';
import * as S from './ChangeMode.style';

function ChangeMode({changeTheme, isDark}) {

    const onClick = () => {
        changeTheme(isDark);
    }
    return(
        <>
            <S.ModeBtn onClick={onClick}>
            {isDark? "🌞 라이트 모드로 보기" : "🌚 다크 모드로 보기"}
            </S.ModeBtn>
        </>
    );
}

export default ChangeMode;