import React, { useState } from 'react';
import * as S from './NavigationBar.style';

const NavigationBar = () => {
const [page, setPage] = useState('About');

    return(
        <S.NavigationBarStyle>
            <S.NavigationBarName>{page}</S.NavigationBarName>
            <S.NavigationBarList>
                <S.NavLink to="/">
                    {page !== "About" && <S.Btn onClick={() => setPage('About')} value="About">About</S.Btn>}
                </S.NavLink>
                <S.NavLink to="/Projects">
                    {page !== "Projects" && <S.Btn onClick={() => setPage('Projects')} value="Projects">Projects</S.Btn>}
                </S.NavLink>
            </S.NavigationBarList>
        </S.NavigationBarStyle>
    );
};

export default NavigationBar;