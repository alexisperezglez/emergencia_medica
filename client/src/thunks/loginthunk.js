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
    return async (dispatch, getState) => {
        dispatch(start());
        try {
            const token = await login(payload);
            localStorage.setItem('bearer_token', token.data.access_token);
            dispatch(success(token));
        } catch (error) {
            console.error('ERROR: ', error);
            sender.growl.show({severity: 'error', summary: 'Bad Credentials', detail:'Contrasena o usuario incorrectos.'});
            dispatch(loginError(error));
        }
    }
}