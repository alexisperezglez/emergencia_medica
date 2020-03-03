import axios from 'axios';
import {
    start,
    success,
    loginError
} from '../actions/loginActions';

const url = 'http://localhost:3000/api/v1/auth/login';

const login = async (user) => {
    return await axios.post(url, user);
}

export default (sender, payload) => {
    console.log('PAYLOAD_THUNK: ', payload);
    console.log('SENDER_THUNK: ', sender);
    return async (dispatch, getState) => {
        console.log('STATE_THUNK: ', getState);
        dispatch(start());
        try {
            const token = await login(payload);
            console.log('USER_RESPONSE: ', token);
            localStorage.setItem('bearer_token', token.data.access_token);
            dispatch(success(token));
        } catch (error) {
            console.log('ERRORRRRRR: ', error);
            sender.growl.show({severity: 'error', summary: 'Bad Credentials', detail:'Contrasena o usuario incorrectos.'});
            dispatch(loginError(error));
        }
    }
}