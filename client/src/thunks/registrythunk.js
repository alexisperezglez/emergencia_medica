import axios from 'axios';
import { start, success, registryError } from '../actions/registryActions';

const url = 'http://localhost:3000/api/v1/user/registry';

const registrerUser = async (user) => {
    return await axios.post(url, user);
}

export default (payload) => {
    return async (dispatch, getState) => {
        dispatch(start());
        try {
            const user = await registrerUser(payload);
            dispatch(success(user));
        } catch(error) {
            console.error('ERROR: ', error);
            dispatch(registryError(error));
        }
    }
}