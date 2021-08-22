import Users from './users';
import {connect} from 'react-redux';
import {
    actions as usersActions,
    toggleFollowed,
    requestMoreUsers, requestUsers, UserType, SearchConfigType, requestUsersAndSetSearchConfig
} from "../../redux/reducers/usersReducer";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getPageUsersLimit, getSearchConfig,
    getTotalUsersCount,
    getUsers
} from "../../redux/selectors/usersSelectors";
import {StateType} from "../../redux/reduxStore";
const {deleteUsers, setCurrentPage} = usersActions

type MapStatePropsType = {
    users: Array<UserType>
    currentPage:number
    totalUsersCount:number
    pageUsersLimit:number
    isFetching:boolean
    searchConfig:SearchConfigType
}
type MapDispatchType = {
    setCurrentPage: (currentPage:number) => void
    deleteUsers: () => void
    toggleFollowed: (id: number, followed: boolean) => void
    requestMoreUsers: (currentPage:number, term:string, friend:boolean | null) => void
    requestUsers: (currentPage:number, term:string, friend:boolean | null) => void
    requestUsersAndSetSearchConfig: (currentPage:number, term:string, friend:boolean | null) => void
}
export type PropsType = MapStatePropsType & MapDispatchType
const mapStateToProps = (state:StateType):MapStatePropsType => ({
    users: getUsers(state),
    currentPage: getCurrentPage(state),
    totalUsersCount: getTotalUsersCount(state),
    pageUsersLimit: getPageUsersLimit(state),
    isFetching: getIsFetching(state),
    searchConfig:getSearchConfig(state)
})

export default compose(
    connect<MapStatePropsType, MapDispatchType, {}, StateType>(mapStateToProps, {
        setCurrentPage, deleteUsers, toggleFollowed, requestMoreUsers, requestUsers,requestUsersAndSetSearchConfig
    }),

)(Users)
