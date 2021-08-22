import {getProfileData} from "./authReducer";
import {InferActionsTypes, StateType} from "../reduxStore";
import {ThunkAction} from "redux-thunk";

const INITIALIZE = 'social/app/INITIALIZE';

const initState = {
    initialized: false
}
type InitStateType = typeof initState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType<T> = ThunkAction<T, StateType, unknown, ActionsTypes>
const appReducer = (state = initState, action: ActionsTypes):InitStateType =>{
    switch (action.type){
        case INITIALIZE:
            return{
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}
export const actions = {
     initializedSuccess: () => ({type:INITIALIZE} as const)
}


export const initialize = ():ThunkType<void> => (dispatch) =>{
    const promise = dispatch(getProfileData());
    Promise.all([promise]).then(() =>{
        dispatch(actions.initializedSuccess());
    })
}

export default appReducer;