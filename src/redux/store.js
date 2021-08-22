const ADD_POST = 'ADD-POST', UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
    UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT', ADD_MESSAGE = 'ADD-MESSAGE';
let store = {
    _state: {
        profilePage: {
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
            ],
            newPostText: 'new'
        },
        dialogsPage: {
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
            ]
        }
    },
    get state() {
        return this._state;
    },


    _addPost() {
        let post = {
            id: 3,
            message: this._state.profilePage.newPostText,
            name: 'FIO',
            like_count: 0
        }
        this._state.profilePage.posts.push(post);
        this._updateNewPostText('')
        this.onStateChange();
    },
    _updateNewPostText(text) {
        this._state.profilePage.newPostText = text;
        this.onStateChange();
    },
    _addMessage(chat) {
        let message = {
            id: 3,
            name: 'me',
            message: chat.newMessageText,
            me: true
        }
        chat.messages.push(message);
        this.onStateChange();
        this._updateNewMessageText(chat, '');
    },
    _updateNewMessageText(chat, new_text) {
        chat.newMessageText = new_text;
        this.onStateChange();
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                this._addPost();
                break;
            case UPDATE_NEW_POST_TEXT:
                this._updateNewPostText(action.new_text);
                break;
            case ADD_MESSAGE:
                this._addMessage(action.chat);
                break;
            case UPDATE_NEW_MESSAGE_TEXT:
                this._updateNewMessageText(action.chat, action.new_text);
                break;
        }
    },

    onStateChange() {
        console.log("Xer");
    }
}




export const createAddPostAction = () => ({type: ADD_POST});
export const createUpdateNewPostTextAction = (new_text) => ({type: UPDATE_NEW_POST_TEXT, new_text: new_text});
export const createUpdateNewMessageTextAction = (chat, new_text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    chat: chat, new_text: new_text
});
export const createAddMessageAction = (chat, new_message) => ({type: ADD_MESSAGE, chat: chat});
export default store;