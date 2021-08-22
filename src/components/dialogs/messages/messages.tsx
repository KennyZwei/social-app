import React, {FC} from 'react';
import s from './messages.module.css';
import Message from "../../message/message";
import {MessageType} from "../../../redux/reducers/dialogsReducer";

type PropsType = {
    messages:Array<MessageType>
}
const Messages:FC<PropsType> = (props) => {
    let messages = props.messages.map(message =>{
        if(message.me){
            return <Message className='me' name={message.name} message={message.message} />
        }else{
            return <Message name={message.name} message={message.message} />
        }
    })
    return (
        <div className={s.messages}>
            {messages}
        </div>
    );
}

export default Messages;