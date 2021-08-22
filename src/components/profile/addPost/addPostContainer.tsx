import {connect} from "react-redux";
import AddPost from "./addPost";
import {
    actions as profileActions,
} from "../../../redux/reducers/profileReducer";
import {StateType} from "../../../redux/reduxStore";
const {addPost} = profileActions


type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
}
export type PropsType = MapDispatchPropsType
const AddPostContainer = connect<{}, MapDispatchPropsType, {}, StateType>(null,
    {addPost})(AddPost);
export default AddPostContainer;