import {DefaultOperationType, instance, ResultCodeCaptcha, ResultCodes} from "./api";

type MeDataType = {
        id: number
        email: string
        login: string

}
type LoginDataType = {
        userId:number
}
export const authAPI = {
    me() {
        return instance.get<DefaultOperationType<MeDataType>>('auth/me').then(response => response.data);
    },

    logout() {
        return instance.delete<DefaultOperationType>('auth/login').then(response => response.data);
    },

    logon(email: string, password: string, rememberMe: boolean, captcha: string | null) {
        return instance.post<DefaultOperationType<LoginDataType, ResultCodeCaptcha & ResultCodes>>('auth/login', {
            email: email, password: password,
            rememberMe: rememberMe, captcha: captcha
        }).then(response => response.data);
    },
    getCaptcha() {
        return instance.get<{url:string}>('security/get-captcha-url').then(response => response.data);
    }
}