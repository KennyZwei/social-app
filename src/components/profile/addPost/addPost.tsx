import React, {ChangeEvent, FC, useState} from 'react';
import s from './addPost.module.css';
import {PropsType} from "./addPostContainer";

const AddPost:FC<PropsType> = (props) => {
    const [newPostText, setNewPostText] = useState('new');
    const onAddPost = ()=>{
        props.addPost(newPostText);
    }
    const updateNewPostText = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        setNewPostText(e.currentTarget.value);
    }


    return (
        <div className={s.add_post}>
            <textarea onChange={updateNewPostText}  value={newPostText} />
            <button onClick={onAddPost}>Add post</button>
        </div>
    );
}

export default AddPost;