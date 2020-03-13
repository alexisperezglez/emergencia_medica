import {
    DISEASE_FETCH_START,
    DISEASE_FETCH_FAILED,
    DISEASE_FETCH_SUCCESS,
    DISEASE_VSIBLE_DIALOG,
    DISEASE_ADD_SUCCESS,
    DISEASE_INITIAL_VALUES,
} from '../actions/actionsConst';


const initState = {
    data: [
        {id: 1, name: 'peste a pata', observations: 'animal muerto', user: {id: 1, name: 'Yo mismo'}},
        {id: 2, name: 'calvo', observations: 'brilla la calva', user: {id: 1, name: 'Yo mismo'}},
        {id: 3, name: 'manco', observations: 'no se puede arrascar', user: {id: 1, name: 'Yo mismo'}},
    ],
    error: undefined,
    connecting: false,
    visible: false,
    initialValues: {},
}

export function diseases(state = initState, action) {
    switch (action.type) {
        case DISEASE_FETCH_START:
            return {
                ...state,
                connecting: true,
            };
        case DISEASE_FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload,
                connecting: false,
            };
        case DISEASE_FETCH_FAILED:
            return {
                ...state,
                error: action.payload,
                data: [],
            }
        case DISEASE_VSIBLE_DIALOG:
            return {
                ...state,
                visible: action.payload,
            }
        case DISEASE_ADD_SUCCESS:
            return {
                ...state,
                visible: false,
                data: action.payload,
            }
        case DISEASE_INITIAL_VALUES:
            return {
                ...state,
                visible: true,
                initialValues: action.payload,
            }
        default:
            return state;
    }
}