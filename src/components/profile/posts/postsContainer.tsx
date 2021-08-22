import Posts from "./posts";
import {getPosts} from "../../../redux/selectors/profileSelectors";
import {PostType} from "../../../redux/reducers/profileReducer";
import {StateType} from "../../../redux/reduxStore";
import {connect} from "react-redux";


type MapStatePropsType = {
    posts: Array<PostType>
}
export type PropsType = MapStatePropsType
const mapStateToProps = (state: StateType): MapStatePropsType => ({
    posts: getPosts(state)
})

const PostsContainer = connect<MapStatePropsType, {}, {}, StateType>(mapStateToProps)(Posts);
export default PostsContainer