import {
    LOGIN_FETCH_START,
    LOGIN_FETCH_SUCCESS,
    LOGIN_FETCH_FAILED
} from '../actions/actionsConst'

export const start = () => {
    return {
        type: LOGIN_FETCH_START
    }
}

export const success = (payload) => {
    return {
        type: LOGIN_FETCH_SUCCESS,
        payload,
    }
}

export const loginError = (error) => {
    return {
        type: LOGIN_FETCH_FAILED,
        payload: error,
    }
}