import React, {FC, useState} from 'react';
import s from './user.module.css';
import avatar from '../../../assests/image/avatar.jpg';
import {NavLink} from "react-router-dom";

type PropsType = {
    id:number
    followed:boolean
    photo: string | null
    name: string
    status:string | null

    toggleFollowed: (id: number, followed:boolean) => any
}

const User:FC<PropsType> = React.memo(function User(props) {
    const [toggling, setToggling] = useState(false)

    const toggleFollowed = () => {
        setToggling(true);
        props.toggleFollowed(props.id, props.followed).then(() => {
            setToggling(false);
        })
    }
    const toggle_button_text = props.followed ? 'unfollow' : 'follow';
    return (
        <div className={s.user}>
            <NavLink to={`profile/${props.id}`}>
                <img alt='photo' src={props.photo || avatar} />
            </NavLink>
            <div className={s.user_information}>
                <span className={s.name}>{props.name}</span>
                <p>{props.status}</p>
            </div>
            <button onClick={toggleFollowed} disabled={toggling}>{toggle_button_text}</button>
        </div>
    );
})

export default User;