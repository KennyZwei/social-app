import {StateType} from "../reduxStore";


export const getChats = (state:StateType) =>{
    return state.dialogsPage.chats
}