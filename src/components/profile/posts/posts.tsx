import React, {FC} from 'react';
import s from './posts.module.css';
import Post from "./post/post";
import {PropsType} from "./postsContainer";

const Posts:FC<PropsType> = (props) => {
    let posts = props.posts.map(
        post => <Post key={post.id} message={post.message}
                      name={post.name} like_count={post.like_count}/>);
    return (
        <div className={s.posts}>
            {posts}
        </div>
    );
}

export default Posts;