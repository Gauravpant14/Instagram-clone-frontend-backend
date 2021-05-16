import { combineReducers} from 'redux';
import {signupReducer} from './signupReducer';

export const rootReducer = combineReducers({
    signupResponse : signupReducer
})

export default rootReducer