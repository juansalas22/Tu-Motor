import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { uiReducer } from './uiReducer';
import { productReducer } from './productReducer';


export const RootReducer = combineReducers({
    
    auth: authReducer,
    ui: uiReducer,
    product: productReducer

})