import { combineReducers } from "redux";
import {
    reducer as formReducer
} from 'redux-form';
import { registry } from './reducers';
import { login } from './loginReducers';

export default combineReducers({
    registry,
    login,
    form: formReducer
});