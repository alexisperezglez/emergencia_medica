import {
    AILMENT_FETCH_START,
    AILMENT_FETCH_FAILED,
    AILMENT_FETCH_SUCCESS,
    AILMENT_VSIBLE_DIALOG
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
}

export function ailments(state = initState, action) {
    switch (action.type) {
        case AILMENT_FETCH_START:
            return {
                ...state,
                connecting: true,
            };
        case AILMENT_FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload,
                connecting: false,
            };
        case AILMENT_FETCH_FAILED:
            return {
                ...state,
                error: action.payload,
                data: [],
            }
        case AILMENT_VSIBLE_DIALOG:
            return {
                ...state,
                visible: action.payload,
            }
        default:
            return state;
    }
}