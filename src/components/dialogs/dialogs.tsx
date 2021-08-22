import React, {FC} from 'react';
import s from './dialogs.module.css';
import Chat from "./chat/chat";
import Messages from "./messages/messages";
import {Route} from "react-router-dom";
import AddMessage from "./addMessage/addMessage";
import {DialogsPropsType} from "./dialogsContainer";

const Dialogs:FC<DialogsPropsType> = (props) => {
    let chats =
        props.chats.map(chat => <Chat name={chat.name} id={chat.id}/>)

    let messagesRoute =
        props.chats.map(chat => <Route path={'/dialogs/' + chat.id} render={() =>
            <div>
                <Messages messages={chat.messages}/>
                <AddMessage id={chat.id} newMessageText={chat.newMessageText}
                            updateNewMessageText={props.updateNewMessageText}
                            addMessage={props.addMessage}
                />
            </div>
        }/>)

    return (
        <div className={s.main}>
            <div className={s.chats}>
                {chats}
            </div>
            {messagesRoute}
        </div>
    );
}

export default Dialogs;