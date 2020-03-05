import {
    LOGIN_FETCH_START,
    LOGIN_FETCH_FAILED,
    LOGIN_FETCH_SUCCESS
} from '../actions/actionsConst';

const initState = {
    data: [],
    error: undefined,
    registred: false
}

export function login(state = initState, action) {
    switch (action.type) {
        case LOGIN_FETCH_START:
            return {
                ...state,
                connecting: true,
            };
        case LOGIN_FETCH_SUCCESS:
            return {
                ...state,
                connecting: false,
                loggedin: true
            };
        case LOGIN_FETCH_FAILED:
            return {
                ...state,
                error: action.payload,
            }
            default:
                return state;
    }
}