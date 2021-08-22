import React, {FC} from 'react';
import s from './chat.module.css';
import {NavLink} from "react-router-dom";

type PropsType = {
    id:number
    name:string
}
const Chat:FC<PropsType> = (props) => {
    return (
        <div className={s.main}>
            <div className={s.avatar}>
                <img alt='avatar' src='https://yt3.ggpht.com/a/AGF-l79_strxcWBhokrn4lOPA5P6GIcCZSmxUOKmDA=s900-c-k-c0xffffffff-no-rj-mo'/>
            </div>
            <NavLink to={'/dialogs/' + props.id} className={s.chat_name}>{props.name}</NavLink>
        </div>
    );
}

export default Chat;