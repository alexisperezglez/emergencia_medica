import {
    PROFILE_FETCH_START,
    PROFILE_FETCH_FAILED,
    PROFILE_FETCH_SUCCESS
} from '../actions/actionsConst';

const initState = {
    data: [],
    error: undefined,
    registred: false,
}

export function profileInfo(state = initState, action) {
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