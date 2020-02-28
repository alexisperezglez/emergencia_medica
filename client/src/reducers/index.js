import { combineReducers } from "redux";
import {
    reducer as formReducer
} from 'redux-form';
import { registry } from './reducers';

export default combineReducers({
    registry,
    form: formReducer
});