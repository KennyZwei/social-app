import React, {FC} from 'react';
import s from './post.module.css';
import Message from '../../../message/message'

type PropsType = {
    name:string
    message:string
    like_count:number
}
const Post:FC<PropsType> = (props) =>{
    return(
        <div className={s.main}>
            <Message name={props.name} message={props.message}/>
            <div className={s.likes}>
                <button>Like</button>
                <p>{props.like_count}</p>
            </div>
        </div>
    );
}

export default Post;