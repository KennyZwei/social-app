import Header from "./header";
import {connect} from "react-redux";
import {logout} from "../../redux/reducers/authReducer";
import {StateType} from "../../redux/reduxStore";
import {getIsAuth, getLogin} from "../../redux/selectors/authSelectors";

type MapStatePropsType = {
    isAuth:boolean
    login:string | null
}
type MapDispatchPropsType = {
    logout: () => void
}
export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state:StateType):MapStatePropsType => ({
    isAuth:getIsAuth(state),
    login:getLogin(state)
})

const HeaderContainer = connect<MapStatePropsType, MapDispatchPropsType,{},StateType>
(mapStateToProps, {logout})(Header);
export default HeaderContainer;