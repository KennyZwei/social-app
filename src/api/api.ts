import axios from "axios";

export const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY' : 'ceadf895-0db0-4dec-9487-79601e86c00a'
    }
})

export type DefaultOperationType<D = {},RC = ResultCodes> = {
    data:D
    resultCode: RC
    messages: Array<string>
}

export enum ResultCodes {
    Success = 0,
    Error = 1
}
export enum ResultCodeCaptcha {
    NeedCaptcha = 10
}