import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import {StateType} from "../../redux/reduxStore";
import {getIsAuth} from "../../redux/selectors/authSelectors";
import React from "react";

type MapStatePropsType = {
    isAuth:boolean
}
const mapStateToProps = (state:StateType):MapStatePropsType =>({
    isAuth: getIsAuth(state)
})

const CheckAuthComponent = (Component:any) =>{
    const RedirectComponent = (props:any) =>{
        if(props.isAuth){
            return <Component {...props} />
        }else{
            return <Redirect to='/login'/>
        }
    }

    return connect<MapStatePropsType, {},{},StateType>(mapStateToProps)(RedirectComponent);
 }


 export default CheckAuthComponent;

