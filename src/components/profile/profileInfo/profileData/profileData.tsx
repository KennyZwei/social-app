import React, {FC} from 'react';
import s from './profileData.module.css';
import {ContactsType, ProfileType} from "../../../../redux/reducers/profileReducer";

type PropsType = {
    profile: ProfileType
    isOwner: boolean
    onEdit: () => void
}
const ProfileData: FC<PropsType> = ({profile, onEdit, isOwner}) => {
    return (
        <div className={s.profile_data}>
            <b>Full name</b><p>{profile.fullName}</p>
            <b>about Me</b><p>{profile.aboutMe}</p>
            <b>Skills</b><p>{profile.lookingForAJobDescription}</p>
            <b>Contacts</b>:
            {Object.keys(profile.contacts).map(keyName => {
                return <div className={s.contact}>
                    <b>{keyName}</b>:<span>{profile.contacts[keyName as keyof ContactsType]}</span>
                </div>
            })}
            {
                isOwner ? <button onClick={onEdit}>Edit Information</button> : null
            }
        </div>
    );
}

export default ProfileData;