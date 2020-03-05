import axios from 'axios';
import {
    start,
    success,
    profileInfoError,
} from '../actions/profileInfoActions';

const url = 'http://localhost:3000/api/v1/auth/profile';

const profileUser = async () => {
    return await axios.get(url);
}

export const fetchProfileThunk = () => {
    return async (dispatch, getState) => {
        dispatch(start());
        try {
            const user = await profileUser();
            dispatch(success(user));
        } catch (error) {
            console.log('ERROR: ', error);
            dispatch(profileInfoError(error));
        }
    }
}