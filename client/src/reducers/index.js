import { combineReducers } from "redux";
import {
    reducer as formReducer
} from 'redux-form';
import { registry } from './reducers';
import { login } from './loginReducers';
import { profileInfo } from './profileInfoReducers';
import { ailments } from './ailmentsReducers';
import { diseases } from './diseasesReducers';

export default combineReducers({
    registry,
    login,
    ailments,
    diseases,
    profileInfo,
    form: formReducer
});