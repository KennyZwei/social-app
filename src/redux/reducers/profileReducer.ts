import {profileAPI} from "../../api/profileAPI";
import {InferActionsTypes, StateType} from "../reduxStore";
import {ThunkAction} from "redux-thunk";
import {ResultCodes} from "../../api/api";

const ADD_POST = 'social/profile/ADD-POST',
    SET_PROFILE_INFORMATION = 'social/profile/SET-PROFILE-INFORMATION',
    SET_IS_FETCHING = 'social/profile/SET-IS-FETCHING', SET_STATUS = 'social/profile/SET-STATUS',
    SAVE_IMAGE = 'social/profile/SAVE_IMAGE', SET_IS_OWNER = 'social/profile/SET-IS-OWNER';

export type PostType = {
    id: number
    message: string
    name: string
    like_count: number
}
export type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}
const initState = {
    posts: [
        {
            id: 1,
            message: 'Hi',
            name: 'FIO',
            like_count: 10
        },
        {
            id: 2,
            message: 'How are you?',
            name: 'FIO',
            like_count: 15
        }
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '' as string | null,
    isFetching: true,
    isOwner: false
}
type InitStateType = typeof initState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType<T> = ThunkAction<T, StateType, unknown, ActionsTypes>

const profileReducer = (state: InitStateType = initState, action: ActionsTypes): InitStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: 3,
                    message: action.newPostText,
                    name: 'FIO',
                    like_count: 0
                }],
            };
        case SET_PROFILE_INFORMATION:
            return {
                ...state,
                profile: {...state.profile, ...action.profile}
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_IMAGE:
            const profile = state.profile ? {...state.profile, photos: action.photos} : null;
            return {
                ...state,
                profile
            }
        case SET_IS_OWNER:
            return {
                ...state,
                isOwner: action.isOwner
            }
        default:
            return state;
    }
}
export const actions = {
    setIsFetching: (isFetching: boolean) => ({type: SET_IS_FETCHING, isFetching} as const),
    setStatusSuccess: (status: string | null) => ({type: SET_STATUS, status} as const),
    saveImageSuccess: (photos: PhotosType) => ({type: SAVE_IMAGE, photos} as const),
    setIsOwner: (isOwner: boolean) => ({type: SET_IS_OWNER, isOwner} as const),
    addPost: (newPostText: string) => ({type: ADD_POST, newPostText} as const),
    setProfileInformationSuccess: (profile: ProfileType) => ({
        type: SET_PROFILE_INFORMATION,
        profile
    } as const)
}
export const setStatus = (status: string | null): ThunkType<void> => (dispatch) => {
    profileAPI.setStatus(status).then((data) => {
        if (data.resultCode === ResultCodes.Success) {
            dispatch(actions.setStatusSuccess(status));
        }
    })
}

export const requestProfileInformation = (userId: number): ThunkType<void> => (dispatch) => {
    dispatch(actions.setIsFetching(true));
    profileAPI.getProfile(userId)
        .then((data) => {
            dispatch(actions.setProfileInformationSuccess(data));
            dispatch(actions.setIsFetching(false));
        });
}
export const setProfileInformation = (profile: ProfileType): ThunkType<void> => (dispatch) => {
    profileAPI.setProfile(profile).then(data => {
        if (data.resultCode === ResultCodes.Success) {
            dispatch(actions.setProfileInformationSuccess(profile))
        }
    })
}
export const getStatus = (userId: number): ThunkType<void> => (dispatch) => {
    profileAPI.getStatus(userId).then((data) => {
        dispatch(actions.setStatusSuccess(data));
    })
}

export const saveImage = (photoURL: File): ThunkType<void> => (dispatch) => {
    profileAPI.savePhoto(photoURL).then((data) => {
        if (data.resultCode === ResultCodes.Success) {
            dispatch(actions.saveImageSuccess(data.data.photos));
        }
    })
}

export default profileReducer;