import React, {FC} from 'react';
import s from './logout.module.css';
import {NavLink} from "react-router-dom";

type PropsType = {

}
const Logout:FC<PropsType> = (props) => {
    return (
        <div className={s.logut}>
            <NavLink to='/login'>
                <button className={s.login}>Login</button>
            </NavLink>
            <button className={s.registration}>Registration</button>
        </div>
    );
}

export default Logout;