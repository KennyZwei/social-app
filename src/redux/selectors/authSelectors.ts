import {StateType} from "../reduxStore";


export const getIsAuth = (state: StateType) =>{
    return state.auth.isAuth;
}
export const getMyUserId = (state: StateType) =>{
    return state.auth.userId;
}

export const getCaptchaURL = (state: StateType) =>{
    return state.auth.captchaURL;
}
export const getLogin = (state:StateType) =>{
    return state.auth.login
}