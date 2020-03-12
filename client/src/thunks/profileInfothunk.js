import axios from 'axios';
import {
    start,
    success,
    profileInfoError,
    profileInitialValues,
} from '../actions/profileInfoActions';

const url = 'http://localhost:3000/api/v1/auth/profile';
const urlProfile = 'http://localhost:3000/api/v1/profile';

const profileUser = async () => {
    return await axios.get(url);
}

const updateProfileUser = async (payload) => {
    return await axios.put(urlProfile, payload);
}

export const fetchProfileThunk = () => {
    return async (dispatch, getState) => {
        dispatch(start());
        try {
            const user = await profileUser();
            const { id, ci, name, lastname, username,  email } = user.data.user;
            const initialValues = {
                id,
                ci,
                name,
                lastName: lastname,
                username,
                email,
                address: user.data.user.profile ? user.data.user.profile.address : undefined,
            };
            // dispatch(profileInitialValues(initialValues));
            dispatch(success({user: user.data, initialValues}));
        } catch (error) {
            console.log('ERROR: ', error);
            dispatch(profileInfoError(error));
        }
    }
}

export const updateProfileThunk = (payload) => {
    return async (dispatch, getState) => {
        dispatch(start());
        try {
            const user = await updateProfileUser(payload);
            let initialValues = {}
            if(user.data && user.data.user) {
                const { id, ci, name, lastname, username,  email } = user.data.user;
                initialValues = {
                    id,
                    ci,
                    name,
                    lastName: lastname,
                    username,
                    email,
                    address: user.data.user.profile ? user.data.user.profile.address : undefined,
                };
            }
            dispatch(success({user: user.data, initialValues}));
        } catch (error) {
            console.log('ERROR: ', error);
            dispatch(profileInfoError(error));
        }
    }
}