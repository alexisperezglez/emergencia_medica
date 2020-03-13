import {
    DISEASE_FETCH_START,
    DISEASE_FETCH_SUCCESS,
    DISEASE_FETCH_FAILED,
    DISEASE_VSIBLE_DIALOG,
    DISEASE_ADD_SUCCESS,
    DISEASE_INITIAL_VALUES,
} from '../actions/actionsConst'

export const start = () => {
    return {
        type: DISEASE_FETCH_START
    }
}

export const success = (payload) => {
    return {
        type: DISEASE_FETCH_SUCCESS,
        payload,
    }
}

export const registryError = (error) => {
    return {
        type: DISEASE_FETCH_FAILED,
        payload: error,
    }
}

export const toggleVisibleDialog = (val) => {
    return {
        type: DISEASE_VSIBLE_DIALOG,
        payload: val,
    }
}

export const successAdd = (payload) => {
    return {
        type: DISEASE_ADD_SUCCESS,
        payload: payload,
    }
}

export const changeInitialValues = (data) => {
    return {
        type: DISEASE_INITIAL_VALUES,
        payload: data,
    }
}