import React from "react";
import * as S from "./SideBarContact.style";

const SideBarContact = () => {
    console.log("SideBarContact Render");

    const SendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.open("mailto:tjdgh3778@gmail.com");
    };

    return <S.SideBarEmailContact onClick={SendEmail}>Contact</S.SideBarEmailContact>;
};

export default SideBarContact;
