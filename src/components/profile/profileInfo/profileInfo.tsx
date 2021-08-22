import React, {FC, useState} from 'react';
import s from './profileInfo.module.css';
import Preloader from "../../common/preloader/preloader";
import StatusContainer from "./status/statusContainer";
import Avatar from "./avatar/avatar";
import ProfileData from "./profileData/profileData";
import {ProfileInfoPropsType} from "./profileInfoContainer";
import ProfileDataFormContainer from "./profileDataForm/profileDataFormContainer";


const ProfileInfo:FC<ProfileInfoPropsType> = (props) => {
    const [editorMode, setEditorMode] = useState(false);


    if (props.isFetching || props.profile === null) {
        return <Preloader/>
    } else {
        return (
            <div className={s.profile_info}>
                <Avatar saveImage={props.saveImage} photo={props.profile?.photos.large} isOwner={props.isOwner} />
                <StatusContainer />
                {
                    editorMode ? <ProfileDataFormContainer setProfileInformation={props.setProfileInformation}
                            onEditOff={() => setEditorMode(false)} profile={props.profile} />
                        : <ProfileData isOwner={props.isOwner} onEdit={() => setEditorMode(true)} profile={props.profile} />
                }
            </div>
        );
    }
}

export default ProfileInfo;