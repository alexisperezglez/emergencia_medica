import {
    PROFILE_FETCH_START,
    PROFILE_FETCH_FAILED,
    PROFILE_FETCH_SUCCESS,
    PROFILE_VSIBLE_DIALOG,
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
                visible: false,
                data: action.payload,
            };
        case PROFILE_FETCH_FAILED:
            return {
                ...state,
                error: action.payload,
            }
        case PROFILE_VSIBLE_DIALOG:
            return {
                ...state,
                visible: action.payload,
            }
        default:
            return state;
    }
}