import {PhotosType} from "./profileReducer";
import {usersAPI} from "../../api/usersAPI";
import {ResultCodes} from "../../api/api";
import {InferActionsTypes, StateType} from "../reduxStore";
import {ThunkAction} from "redux-thunk";

const APPEND_USERS = 'social/users/APPEND-USERS', SET_TOTAL_USERS_COUNT = 'social/users/SET-TOTAL-USERS-COUNT',
    SET_CURRENT_PAGE = 'social/users/SET-CURRENT-PAGE', SET_IS_FETCHING = 'social/users/SET-IS-FETCHING',
    DELETE_USERS = 'social/users/DELETE-USERS', TOGGLE_FOLLOWED = 'social/users/TOGGLE-FOLLOWED',
    SET_USERS = 'social/users/SET-USERS', SET_SEARCH_CONFIG='social/users/SET-SEARCH-CONFIG'
export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: PhotosType
    status: string | null
    followed: boolean
}
export type SearchConfigType = {
    friend:boolean | null,
    term:string
}
const initState = {
    users: [] as Array<UserType>,
    totalUsersCount: 0,
    pageUsersLimit: 10,
    isFetching: false,
    currentPage: 1,
    searchConfig: {
        friend:null,
        term: ''
    } as SearchConfigType
}

type InitStateType = typeof initState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType<T> = ThunkAction<T, StateType, unknown, ActionsTypes>

const usersReducer = (state = initState, action: ActionsTypes): InitStateType => {
    switch (action.type) {
        case APPEND_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case DELETE_USERS:
            return {
                ...state,
                users: []
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case TOGGLE_FOLLOWED:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        user.followed = !user.followed
                    }
                    return user;
                })
            }
        case SET_SEARCH_CONFIG:
            return {
                ...state,
                searchConfig: action.searchConfig
            }
        default:
            return state;
    }
}
export const actions = {
    appendUsers: (users: Array<UserType>) => ({type: APPEND_USERS, users} as const),
    setUsers: (users: Array<UserType>) => ({type: SET_USERS, users} as const),
    setTotalUsersCount: (totalUsersCount: number) => ({
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    } as const),
    setCurrentPage: (currentPage: number) => ({
        type: SET_CURRENT_PAGE,
        currentPage
    } as const),
    setIsFetching: (isFetching: boolean) => ({type: SET_IS_FETCHING, isFetching} as const),
    deleteUsers: () => ({type: DELETE_USERS} as const),
    toggleFollowedSuccess: (id: number) => ({type: TOGGLE_FOLLOWED, id} as const),
    setSearchConfig: (searchConfig:SearchConfigType) => ({type:SET_SEARCH_CONFIG, searchConfig} as const)

}
export const requestUsersAndSetSearchConfig = (currentPage: number, term:string, friend:boolean | null):ThunkType<void> => (dispatch) =>{
    dispatch(actions.setSearchConfig({term, friend}))
    dispatch(requestUsers(currentPage, term, friend))
}
export const requestMoreUsers = (currentPage: number, term:string, friend:boolean | null): ThunkType<void> => (dispatch) => {
    dispatch(actions.setIsFetching(true));
    dispatch(actions.setCurrentPage(currentPage));
    usersAPI.getUsers(currentPage,term,friend).then(data => {
        if (data.error === null) {
            dispatch(actions.setTotalUsersCount(data.totalCount));
            dispatch(actions.appendUsers(data.items));
            dispatch(actions.setIsFetching(false));
        }
    })
}
export const requestUsers = (currentPage: number, term:string, friend:boolean | null): ThunkType<void> => (dispatch) => {
    dispatch(actions.deleteUsers());
    dispatch(actions.setIsFetching(true));
    usersAPI.getUsers(currentPage,term,friend).then((data) => {
        if (data.error === null) {
            dispatch(actions.setTotalUsersCount(data.totalCount));
            dispatch(actions.setUsers(data.items));
            dispatch(actions.setIsFetching(false));
        }
    })
}

export const toggleFollowed = (id: number, followed: boolean): ThunkType<void> => async (dispatch) => {
    let data;
    if (followed) {
        data = await usersAPI.unfollow(id);
    } else {
        data = await usersAPI.follow(id);
    }
    if (data.resultCode === ResultCodes.Success) {
        dispatch(actions.toggleFollowedSuccess(id));
    }
}
export default usersReducer