import axios from 'axios';
import { start, success, registryError } from '../actions/ailmentsActions';

const url = 'http://localhost:3000/api/v1/ailment';

const getAilments = async () => {
    return await axios.get(url);
}

export const getAilmentsThunk = () => {
    return async (dispatch, getState) => {
        dispatch(start());
        try {
            const ailments = await getAilments();
            dispatch(success(ailments.data));
        } catch(error) {
            console.error('ERROR: ', error);
            dispatch(registryError(error));
        }
    }
}