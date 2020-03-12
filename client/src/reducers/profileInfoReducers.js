import {
    PROFILE_FETCH_START,
    PROFILE_FETCH_FAILED,
    PROFILE_FETCH_SUCCESS,
    PROFILE_VSIBLE_DIALOG,
    PROFILE_INITIAL_VALUES,
} from '../actions/actionsConst';

const initState = {
    data: {},
    initialValues: {},
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
                data: action.payload.user,
                initialValues: action.payload.initialValues
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
        case PROFILE_INITIAL_VALUES:
            return {
                ...state,
                initialValues: action.payload,
            }
        default:
            return state;
    }
}