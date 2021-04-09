// light , dark Mode 구현할 버튼 만들기
import React from 'react';
import styled from 'styled-components';

const ModeButton = styled.button`
font-size: ${(props) => props.theme.fontSize.sm};
font-weight: bold;
border: none;
outline: none;
background-color: ${(props) => props.theme.color.modalBgColor};
color: ${(props) => props.theme.color.modalFontColor};
padding: 4px 12px;
border-radius: 8px;
position: fixed;
top: 1%;
left: 1%;
box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;


function ChangeMode({changeTheme, isDark}) {

    const onClick = () => {
        changeTheme(isDark);
    }
    return(
        <>
            <ModeButton onClick={onClick}>
            {isDark? "🌞 라이트 모드로 보기" : "🌚 다크 모드로 보기"}
            </ModeButton>
        </>
    );
}

export default ChangeMode;