import {
    REGISTRY_FETCH_START,
    REGISTRY_FETCH_SUCCESS,
    REGISTRY_FETCH_FAILED
} from '../actions/actionsConst'

export const start = () => {
    return {
        type: REGISTRY_FETCH_START
    }
}

export const success = (payload) => {
    return {
        type: REGISTRY_FETCH_SUCCESS,
        payload,
    }
}

export const registryError = (error) => {
    return {
        type: REGISTRY_FETCH_FAILED,
        payload: error,
    }
}