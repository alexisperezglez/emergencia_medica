import axios from 'axios';
import { start, success, registryError } from '../actions/ailmentsActions';

const url = 'http://localhost:3000/api/v1/ailment';

const getAilments = async () => {
    return await axios.get(url);
}

export const getAilmentsThunk = () => {
    return async (dispatch, getState) => {
        console.log('STATE_THUNK: ', getState);
        dispatch(start());
        try {
            const ailments = await getAilments();
            console.log('AILMENTS_RESPONSE: ', ailments.data);
            dispatch(success(ailments.data));
        } catch(error) {
            dispatch(registryError(error));
        }
    }
}