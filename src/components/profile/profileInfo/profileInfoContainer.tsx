import {connect} from "react-redux";
import ProfileInfo from "./profileInfo";
import {getIsFetching, getIsOwner, getProfile} from "../../../redux/selectors/profileSelectors";
import {ProfileType, saveImage, setProfileInformation} from "../../../redux/reducers/profileReducer";
import {StateType} from "../../../redux/reduxStore";

type MapStatePropsType = {
    profile: ProfileType | null
    isFetching: boolean
    isOwner: boolean
}
type MapDispatchPropsType = {
    saveImage: (photoURL:File) => void
    setProfileInformation: (profile: ProfileType) => void
}
export type ProfileInfoPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: StateType): MapStatePropsType => ({
    profile: getProfile(state),
    isFetching: getIsFetching(state),
    isOwner: getIsOwner(state)
})

const ProfileInfoContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, StateType>
(mapStateToProps, {saveImage, setProfileInformation})(ProfileInfo);

export default ProfileInfoContainer;