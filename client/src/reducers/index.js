import { combineReducers } from "redux";
import {
    reducer as formReducer
} from 'redux-form';
import { registry } from './reducers';
import { login } from './loginReducers';
import { profileInfo } from './profileInfoReducers';

export default combineReducers({
    registry,
    login,
    profileInfo,
    form: formReducer
});