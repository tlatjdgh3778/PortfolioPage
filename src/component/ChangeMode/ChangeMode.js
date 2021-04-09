// light , dark Mode 구현할 버튼 만들기
import React from 'react';
import styled from 'styled-components';

const ModeButton = styled.button`
border: none;
outline: none;
background-color: ${(props) => props.theme.color.bgColor};
color: ${(props) => props.theme.color.fontColor};
`;

function ChangeMode({changeTheme, isDark}) {

    const onClick = () => {
        changeTheme(isDark);
    }
    return(
        <>
            <ModeButton onClick={onClick}>
                {isDark? "🌚 다크 모드로 보기 ":"🌞 라이트 모드로 보기 "}
            </ModeButton>
        </>
    );
}

export default ChangeMode;