import {connect} from "react-redux";
import LoginForm from "./loginForm";
import {logon, LogonType} from "../../../redux/reducers/authReducer";
import {getCaptchaURL} from "../../../redux/selectors/authSelectors";
import {StateType} from "../../../redux/reduxStore";
import {compose} from "redux";
import {withFormik} from "formik";


type MapStatePropsType = {
    captchaURL:string | null
}
type MapDispatchPropsType = {
    logon: (object:LogonType) => any
}
export type LoginFormPropsType = MapStatePropsType & MapDispatchPropsType

export type LoginFormikValuesType = {
    email: string
    password: string
    captcha: string
    rememberMe: boolean
}
const mapStateToProps = (state:StateType): MapStatePropsType =>({
    captchaURL:getCaptchaURL(state)
})


const LoginFormContainer = compose(

    connect<MapStatePropsType, MapDispatchPropsType,{},StateType>
(mapStateToProps, {logon}),
withFormik<LoginFormPropsType, LoginFormikValuesType>({
    mapPropsToValues: () =>({
        email: '',
        password: '',
        captcha: '',
        rememberMe: false
    }),
    validateOnBlur: true,
    validateOnChange: false,
    handleSubmit: (values, {props,setFieldValue,setSubmitting}) =>{
        props.logon(values).then((error:string) => {
            setFieldValue('APIError', error);
        }).finally(() => setSubmitting(false))
    }
}))
(LoginForm)


export default LoginFormContainer;