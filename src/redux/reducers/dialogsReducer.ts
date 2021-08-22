import {InferActionsTypes} from "../reduxStore";

const UPDATE_NEW_MESSAGE_TEXT = 'social/dialogs/UPDATE-NEW-MESSAGE-TEXT', ADD_MESSAGE = 'social/dialogs/ADD-MESSAGE';

export type MessageType = {
    id: number
    name: string
    message: string
    me: boolean
}
export type ChatType = {
    id:number
    name: string
    messages: Array<MessageType>
    newMessageText: string
}
const initState = {
    chats: [
        {
            id: 1,
            name: 'Salich',
            messages: [
                {
                    id: 1,
                    name: 'Salich',
                    message: 'Hi',
                    me: false
                },
                {
                    id: 2,
                    name: 'Me',
                    message: 'Hi, Yoyo',
                    me: true
                }
            ],
            newMessageText: ''

        },
        {
            id: 2,
            name: 'Lenar',
            messages: [
                {
                    id: 1,
                    name: 'Lenar',
                    message: 'How',
                    me: false
                },
                {
                    id: 2,
                    name: 'Me',
                    message: 'Just do it!!!!!',
                    me: true
                }
            ],
            newMessageText: ''
        }
    ] as Array<ChatType>
}
export type InitStateType = typeof initState
type ActionsTypes = InferActionsTypes<typeof actions>

const dialogsReducer = (state = initState, action: ActionsTypes ):InitStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                chats: state.chats.map((chat) => {
                    if (chat.id === action.id) {
                        chat.newMessageText = action.newText;
                    }
                    return chat;
                })
            }
        case ADD_MESSAGE:
            return {
                ...state,
                chats: state.chats.map((chat) => {
                    if (action.id === chat.id) {
                        chat.messages = [...chat.messages, {
                            id: 4,
                            name: 'me',
                            message: chat.newMessageText,
                            me: true
                        }];
                        chat.newMessageText = '';
                    }
                    return chat;
                })
            }
        default:
            return state;
    }
}
export const actions = {
    updateNewMessageText: (id:number,newText: string) => ({
        type: UPDATE_NEW_MESSAGE_TEXT,
        id, newText:newText
    } as const),

    addMessage: (id: number) => ({type: ADD_MESSAGE, id: id} as const)
}


export default dialogsReducer;