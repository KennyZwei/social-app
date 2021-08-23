import {authAPI} from "../../api/authAPI";
import {InferActionsTypes, StateType} from "../reduxStore";
import {ThunkAction} from "redux-thunk";
import {ResultCodes} from "../../api/api";
import {actions as profileActions} from './profileReducer'


const SET_PROFILE_DATA = 'social/auth/SET-PROFILE-DATA', SET_CAPTCHA_URL = 'social/auth/SET-CAPTCHA-URL';
const initState = {
    userId: null as number | null,
    login: null as string | null,
    email: null as string | null,
    captchaURL: null as string | null,
    isAuth: false
}
type InitStateType = typeof initState;
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType<T> = ThunkAction<T, StateType, unknown, ActionsTypes | InferActionsTypes<typeof profileActions>>


const authReducer = (state = initState, action: ActionsTypes): InitStateType => {
    switch (action.type) {
        case SET_PROFILE_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_CAPTCHA_URL:
            return {
                ...state,
                ...action,
            }
        default:
            return state;
    }
}
type SetProfileDataPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export const actions = {
    setProfileData: (payload: SetProfileDataPayloadType) => ({
        type: SET_PROFILE_DATA, payload
    } as const),

    setCaptchaURL: (captchaURL: string) => ({type: SET_CAPTCHA_URL, captchaURL} as const)
}

export const getCaptchaURL = ():ThunkType<void> => (dispatch) => {

    authAPI.getCaptcha().then(data => {
        dispatch(actions.setCaptchaURL(data.url));
    })
}


export const getProfileData = ():ThunkType<Promise<void>> => (dispatch) => {
        return authAPI.me().then((data) => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data;
                dispatch(actions.setProfileData({userId : id, email, login,isAuth: true}))
            }
        });
}

export const logout = ():ThunkType<void> => (dispatch) => {
    authAPI.logout().then((data) => {
        if (data.resultCode === 0) {
            dispatch(actions.setProfileData({userId: null, email:null, login: null, isAuth:false}));
            dispatch(profileActions.setIsOwner(false));
        }

    })
}
export type LogonType = {
    email:string
    password:string
    rememberMe:boolean
    captcha: string | null
}
export const logon = ({email, password, rememberMe, captcha = null}: LogonType ):ThunkType<Promise<string | void>> => (dispatch) => {
    return authAPI.logon(email, password, rememberMe, captcha).then((data) => {
        if (data.resultCode === ResultCodes.Success) {
            dispatch(getProfileData())
        } else if (data.resultCode === ResultCodes.Error) {
            return data.messages[0];
        } else {
            dispatch(getCaptchaURL());
        }

    })
}

export default authReducer;