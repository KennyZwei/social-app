import React, {FC} from 'react';
import s from './message.module.css';
type PropsType = {
    className?:string
    name:string
    message:string
}
const Message:FC<PropsType> = (props) => {
    return (
        <div className={s.main + ' ' + (props.className ? s[props.className] : '')}>
                <div className={s.avatar}>
                    <img alt='avatar'
                         src='https://pixelbox.ru/wp-content/uploads/2020/12/avatar-youtube-99.jpg'/>
                </div>
                <div className={s.message_info}>
                    <div className={s.name}>
                        <h3>{props.name}</h3>
                    </div>
                    <div className={s.message}>
                        <p>{props.message}</p>
                    </div>
                </div>
        </div>
    );
}

export default Message;