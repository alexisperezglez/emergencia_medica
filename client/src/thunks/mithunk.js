import axios from 'axios';
import { start, success, registryError } from '../actions/registryActions';

const url = 'http://localhost:3000/api/v1/user/registry';

const registrerUser = async (user) => {
    return await axios.post(url, user);
}

export default (payload) => {
    console.log('PAYLOAD_THUNK: ', payload);
    return async (dispatch, getState) => {
        console.log('STATE_THUNK: ', getState);
        dispatch(start());
        try {
            const user = await registrerUser(payload);
            dispatch(success(user));
        } catch(error) {
            dispatch(registryError(error));
        }
    }
}