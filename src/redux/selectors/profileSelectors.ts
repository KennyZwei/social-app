import {StateType} from "../reduxStore";

export const getProfile = (state:StateType) => {
    return state.profilePage.profile;
}

export const getIsFetching = (state:StateType) => {
    return state.profilePage.isFetching;
}

export const getPosts = (state:StateType) => {
    return state.profilePage.posts;
}

export const getIsOwner = (state:StateType) => {
    return state.profilePage.isOwner;
}