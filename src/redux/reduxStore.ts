import {Action, applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer, {actions as profileActions} from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";
import thunkMiddleWare, {ThunkAction} from 'redux-thunk';
import appReducer from "./reducers/appReducer";
let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth:authReducer,
    app:appReducer
})
type rootReducerType = typeof rootReducer
export type StateType = ReturnType<rootReducerType>
let store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

type PropertiesType<T> = T extends {[key :string] :  infer U} ? U : never
export type InferActionsTypes<T extends {[key:string]: (...args: any) => any}> = ReturnType<PropertiesType<T>>


// @ts-ignore
window.store = store;

export default store;