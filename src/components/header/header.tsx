import React, {FC} from 'react';
import s from './header.module.css';
import Logon from "./logon/logon";
import Logout from "./logout/logout";
import {HeaderPropsType} from "./headerContainer";

const Header:FC<HeaderPropsType> = (props) =>{
    return(
        <header className={s.header}>
            <div className={s.icon}>
                <img src='https://e7.pngegg.com/pngimages/197/457/png-clipart-round-multicolored-logo-vanamo-logo-icons-logos-emojis-tech-companies.png'/>
            </div>
            {props.isAuth? <Logon userLogin={props.login} logout={props.logout}/> : <Logout />}
        </header>
    );
}

export default Header;