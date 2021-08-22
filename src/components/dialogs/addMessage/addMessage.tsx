import React, {ChangeEvent, FC} from 'react';
import s from './addMessage.module.css';

type PropsType = {
    id:number
    newMessageText:string

    updateNewMessageText:(id:number, newText:string) =>void
    addMessage: (id:number) => void
}
const AddMessage:FC<PropsType> = (props) => {

    const onNewMessageTextChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        let newText = e.target.value;
        props.updateNewMessageText(props.id, newText);
    }

    const onAddMessage = () =>{
        props.addMessage(props.id);
    }

    return (
        <div className={s.add_message}>
            <textarea onChange={onNewMessageTextChange} value={props.newMessageText}/>
            <button onClick={onAddMessage}>send message</button>
        </div>
    );
}

export default AddMessage;