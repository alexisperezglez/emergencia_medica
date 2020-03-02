import { REGISTRY_FETCH_START, REGISTRY_FETCH_SUCCESS, REGISTRY_FETCH_FAILED } from '../actions/actionsConst';

export function registry(state = {data: [], error: undefined, registred: false}, action) {
    console.log('ACTION: ', action);
    switch (action.type) {
        case REGISTRY_FETCH_START:
            return {
                ...state,
                connecting: true,
            };
        case REGISTRY_FETCH_SUCCESS:
            return {
                ...state,
                connecting: false,
                registred: true
            };
        case REGISTRY_FETCH_FAILED:
            return {
                ...state,
                error: action.payload,
            }
            default:
                return state;
    }
}