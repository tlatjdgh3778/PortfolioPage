import React from 'react';
import * as S from './SideBarContact.style';

const SendEmail = (e) => {
    e.preventDefault();
    window.open('mailto:tjdgh3778@gmail.com')};

const SideBarContact = () => {
    return(
        <S.SideBarEmailContact onClick={SendEmail}>Contact</S.SideBarEmailContact>
    );
};

export default SideBarContact;