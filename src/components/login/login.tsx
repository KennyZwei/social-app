import React, {FC} from 'react';
import s from './login.module.css';
import LoginFormContainer from "./loginForm/loginFormContainer";
import {Redirect} from "react-router-dom";
import {LoginPropsType} from "./loginContainer";

const Login:FC<LoginPropsType> = (props) => {
    if(props.isAuth) return <Redirect to='/profile' />

    return (
        <div className={s.login}>
            <LoginFormContainer />
        </div>
    );
}

export default Login