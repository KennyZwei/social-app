import Dialogs from "./dialogs";
import {connect} from "react-redux";
import {actions as dialogsActions,
     ChatType,
} from "../../redux/reducers/dialogsReducer";
import {compose} from "redux";
import CheckAuthComponent from "../hoc/checkAuth";
import {StateType} from "../../redux/reduxStore";
import {getChats} from "../../redux/selectors/dialogsSelectors";
const {updateNewMessageText, addMessage} = dialogsActions

type MapStatePropsType = {
    chats: Array<ChatType>
}
type MapDispatchPropsType = {
    addMessage: (id:number) => void
    updateNewMessageText: (id:number, newText:string) => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state:StateType):MapStatePropsType =>({
    chats:getChats(state),

})
export default compose(
    CheckAuthComponent,
    connect<MapStatePropsType, MapDispatchPropsType, {}, StateType>
    (mapStateToProps, {addMessage, updateNewMessageText})
)(Dialogs);