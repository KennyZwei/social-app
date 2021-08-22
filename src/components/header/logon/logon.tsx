import React, {FC} from 'react';
import s from './logon.module.css';

type PropsType = {
    userLogin:string | null
    logout: () => void
}
const Logon:FC<PropsType> = (props) =>{
    return(
        <div className={s.logon}>
            <div className={s.userLogin}>
                <h2>{props.userLogin}</h2>
            </div>
            <div className={s.logout}>
                <button onClick={props.logout}>logout</button>
            </div>
        </div>
    );
}

export default Logon;