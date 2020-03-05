import axios from 'axios';
import { start, success, registryError, successAdd } from '../actions/diseasesActions';

const url = 'http://localhost:3000/api/v1/disease';

const getDiseases = async () => {
    return await axios.get(url);
}

const addDisease = async (payload) => {
    return await axios.post(url, payload);
}

export const getDiseasesThunk = () => {
    return async (dispatch, getState) => {
        dispatch(start());
        try {
            const diseases = await getDiseases();
            dispatch(success(diseases.data.diseases));
        } catch(error) {
            console.error('ERROR: ', error);
            dispatch(registryError(error));
        }
    }
}

export const addDiseasesThunk = (payload) => {
    return async (dispatch, getState) => {
        dispatch(start());
        try {
            const diseases = await addDisease(payload);
            dispatch(successAdd(diseases.data.diseases));
        } catch (error) {
            console.error('ERROR: ', error);
            dispatch(registryError(error));
        }
    }
}