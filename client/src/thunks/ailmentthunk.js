import axios from 'axios';
import { start, success, registryError, successAdd } from '../actions/ailmentsActions';

const url = 'http://localhost:3000/api/v1/ailment';

const getAilments = async () => {
    return await axios.get(url);
}

const addAilment = async (payload) => {
    return await axios.post(url, payload);
}

export const getAilmentsThunk = () => {
    return async (dispatch, getState) => {
        dispatch(start());
        try {
            const ailments = await getAilments();
            dispatch(success(ailments.data.ailments));
        } catch(error) {
            console.error('ERROR: ', error);
            dispatch(registryError(error));
        }
    }
}

export const addAilmentsThunk = (payload) => {
    return async (dispatch, getState) => {
        dispatch(start());
        try {
            const ailments = await addAilment(payload);
            dispatch(successAdd(ailments.data.ailments));
        } catch (error) {
            console.error('ERROR: ', error);
            dispatch(registryError(error));
        }
    }
}