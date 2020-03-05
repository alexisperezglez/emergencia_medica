import {
    AILMENT_FETCH_START,
    AILMENT_FETCH_SUCCESS,
    AILMENT_FETCH_FAILED,
    AILMENT_VSIBLE_DIALOG,
} from '../actions/actionsConst'

export const start = () => {
    return {
        type: AILMENT_FETCH_START
    }
}

export const success = (payload) => {
    return {
        type: AILMENT_FETCH_SUCCESS,
        payload,
    }
}

export const registryError = (error) => {
    return {
        type: AILMENT_FETCH_FAILED,
        payload: error,
    }
}

export const toggleVisibleDialog = (val) => {
    return {
        type: AILMENT_VSIBLE_DIALOG,
        payload: val,
    }
}