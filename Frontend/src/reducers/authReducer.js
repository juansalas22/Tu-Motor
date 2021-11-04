import { types } from "../types/types";

const initialState = {
    users: []
};


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        /* case types.loginLoaded:
            return {
                ...state,
                users: [ ...action.payload ]
            } */
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        case types.logout:
            return{}
            


        default:
            return state;
    }

}