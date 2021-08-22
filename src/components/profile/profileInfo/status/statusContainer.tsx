import {connect} from "react-redux";
import Status from "./status";
import {setStatus} from "../../../../redux/reducers/profileReducer";
import {StateType} from "../../../../redux/reduxStore";

type MapStatePropsType = {
    status:string | null
}
type MapDispatchPropsType = {
    setStatus: (status:string  | null) => void
}
export type StatusPropsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state:StateType):MapStatePropsType => ({
    status:state.profilePage.status
})

const StatusContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, StateType>
(mapStateToProps, {setStatus})(Status);
export default StatusContainer;
