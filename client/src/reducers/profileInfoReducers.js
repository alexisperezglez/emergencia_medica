import {
    PROFILE_FETCH_START,
    PROFILE_FETCH_FAILED,
    PROFILE_FETCH_SUCCESS
} from '../actions/actionsConst';

export function profileInfo(state = {
    data: [],
    error: undefined,
    registred: false
}, action) {
    console.log('ACTION: ', action);
    switch (action.type) {
        case PROFILE_FETCH_START:
            return {
                ...state,
                connecting: true,
            };
        case PROFILE_FETCH_SUCCESS:
            return {
                ...state,
                connecting: false,
                    loggedin: true
            };
        case PROFILE_FETCH_FAILED:
            return {
                ...state,
                error: action.payload,
            }
            default:
                return state;
    }
}