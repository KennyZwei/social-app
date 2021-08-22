import React, {ChangeEvent, FC} from 'react';
import s from './avatar.module.css';
import avatar from '../../../../assests/image/avatar.jpg';

type PropsType = {
    photo:string | null | undefined
    isOwner:boolean
    saveImage: (file: File) => void
}
const Avatar:FC<PropsType> = (props) => {
    const fileIsSelected = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.currentTarget.files
        if (files !== null) {
            props.saveImage(files[0])
        }

    }
    return (
        <div className={s.avatar}>
            <img alt='фон'
                 src={props.photo || avatar}/>
            {props.isOwner ? <input onChange={fileIsSelected} type='file'/> : null}
        </div>
    );
}

export default Avatar;