import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import s from './status.module.css';
import {StatusPropsType} from "./statusContainer";

const Status:FC<StatusPropsType> = (props) => {
    const [localStatus, setLocalStatus] = useState(props.status);
    const [editorMode, setEditorMode] = useState(false);

    useEffect(()=>{
        setLocalStatus(props.status);
    },[props.status])

    const inputFocusOff = () => {
        props.setStatus(localStatus);
        setEditorMode(false);
    }
    const clickOnStatus = () => {
        setEditorMode(true);
    }
    const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(e.currentTarget.value);
    }

    if (!editorMode) {
        return <div className={s.status}>
            {<h3 onClick={clickOnStatus}>{localStatus || '----'}</h3>}
        </div>
    } else {
        return <div className={s.status}>
            {<input onChange={inputOnChange} autoFocus={true} onBlur={inputFocusOff} value={localStatus || ''}/>
            }
        </div>
    }
}

export default React.memo(Status);