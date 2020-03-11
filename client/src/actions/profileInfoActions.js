import {
    PROFILE_FETCH_START,
    PROFILE_FETCH_SUCCESS,
    PROFILE_FETCH_FAILED,
    PROFILE_VSIBLE_DIALOG,
} from '../actions/actionsConst'

export const start = () => {
    return {
        type: PROFILE_FETCH_START
    }
}

export const success = (payload) => {
    return {
        type: PROFILE_FETCH_SUCCESS,
        payload,
    }
}

export const profileInfoError = (error) => {
    return {
        type: PROFILE_FETCH_FAILED,
        payload: error,
    }
}

export const toggleVisibleDialog = (val) => {
    return {
        type: PROFILE_VSIBLE_DIALOG,
        payload: val,
    }
}

export const profileInfoDataJWT = (payload) => {
    return {
        type: PROFILE_FETCH_FAILED,
        payload,
    }
}