import React, {FC, useEffect} from 'react';
import s from './profile.module.css';
import AddPostContainer from "./addPost/addPostContainer";
import PostsContainer from "./posts/postsContainer";
import ProfileInfoContainer from "./profileInfo/profileInfoContainer";
import {Redirect} from "react-router-dom";
import {ProfilePropsType} from "./profileContainer";

const Profile:FC<ProfilePropsType> = (props) => {
    const userId:number | null = +props.match.params.userId || props.myUserId;
    useEffect(() => {
        if (userId) {
            props.getStatus(userId);
            props.requestProfileInformation(userId);
            if(userId === props.myUserId){
                props.setIsOwner(true)
            }else{
                props.setIsOwner(false)
            }
        }
    }, [ userId])
    if (!userId) {
        return <Redirect to='/login'/>;
    } else {
        return (
            <div className={s.main}>
                <ProfileInfoContainer/>
                <AddPostContainer/>
                <PostsContainer/>
            </div>
        );
    }
}

export default Profile;