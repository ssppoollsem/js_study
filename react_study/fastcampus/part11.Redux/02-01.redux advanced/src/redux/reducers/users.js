import { GET_USERS_FAIL, GET_USERS_FULFILLED, GET_USERS_PENDING, GET_USERS_REJECTED, GET_USERS_START, GET_USERS_SUCCESS } from '../actions';

const initialState = {
    loading: false,
    data: [],
    error: null,
};

export default function users(state = initialState, action) {
    if (action.type === GET_USERS_START || action.type === GET_USERS_PENDING) {
        return {
            ...state,
            loading: true,
            error: null,
        };
    }
    if (action.type === GET_USERS_SUCCESS) {
        return {
            ...state,
            loading: true,
            data: action.data,
        };
    }
    if (action.type === GET_USERS_FULFILLED) {
        return {
            ...state,
            loading: true,
            data: action.payload,
        };
    }
    if (action.type === GET_USERS_FAIL) {
        return {
            ...state,
            loading: true,
            data: action.error,
        };
    }
    if (action.type === GET_USERS_REJECTED) {
        return {
            ...state,
            loading: true,
            data: action.PAYLOAD,
        };
    }
    return state;
}
