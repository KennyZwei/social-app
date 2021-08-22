import {StateType} from "../reduxStore";


export const getUsers = (state:StateType) =>{
    return state.usersPage.users;
}

export const getCurrentPage = (state:StateType) =>{
    return state.usersPage.currentPage;
}

export const getTotalUsersCount = (state:StateType) =>{
    return state.usersPage.totalUsersCount;
}

export const getPageUsersLimit = (state:StateType) =>{
    return state.usersPage.pageUsersLimit;
}

export const getIsFetching = (state:StateType) =>{
    return state.usersPage.isFetching;
}

export const getSearchConfig = (state:StateType) =>{
    return state.usersPage.searchConfig
}