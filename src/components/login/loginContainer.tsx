import Login from "./login";
import {connect} from "react-redux";
import {getIsAuth} from "../../redux/selectors/authSelectors";
import {StateType} from "../../redux/reduxStore";
import React from "react";

type MapStatePropsType = {
    isAuth: boolean
}
export type LoginPropsType = MapStatePropsType
const mapStateToProps = (state:StateType):MapStatePropsType => ({
    isAuth:getIsAuth(state)
})
const LoginContainer = connect<MapStatePropsType, {},{}, StateType>(mapStateToProps)(Login);
export default LoginContainer;