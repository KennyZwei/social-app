import {connect} from "react-redux";
import {withRouter,RouteComponentProps} from 'react-router-dom';
import Profile from "./profile";
import {requestProfileInformation, getStatus, actions as profileActions} from "../../redux/reducers/profileReducer";
import {compose} from "redux";
import {getMyUserId} from "../../redux/selectors/authSelectors";
import {getIsOwner} from "../../redux/selectors/profileSelectors";
import {StateType} from "../../redux/reduxStore";
const {setIsOwner} = profileActions

type MapStatePropsType = {
    myUserId: number | null
    isOwner: boolean
}
type MapDispatchPropsType = {
    requestProfileInformation: (userId: number) => void
    getStatus: (userId: number) => void
    setIsOwner: (isOwner: boolean) => void
}
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<{userId:string }>
const mapStateToProps = (state: StateType): MapStatePropsType => ({
    myUserId: getMyUserId(state),
    isOwner: getIsOwner(state),
})
export default compose(
    withRouter,
    connect<MapStatePropsType, MapDispatchPropsType, {}, StateType>
    (mapStateToProps, {requestProfileInformation, getStatus, setIsOwner})
)(Profile)
