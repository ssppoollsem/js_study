import axios from 'axios';

// 액션 타입 정의
export const GET_USERS_START = 'redux-start/users/GET_USERS_START'; // 깃헙 API 호출을 시작하는 것을 의미
export const GET_USERS_SUCCESS = 'redux-start/users/GET_USERS_SUCCESS'; // 깃헙 API 호출에 대한 응답이 성공으로 돌아온 경우
export const GET_USERS_FAIL = 'redux-start/users/GET_USERS_FAIL'; // 깃헙 API 호출에 대한 응답이 실패한 경우
const GET_USERS = 'redux-start/users/GET_USERS';

export const GET_USERS_PENDING = 'redux-start/users/GET_USERS_PENDING';
export const GET_USERS_FULFILLED = 'redux-start/users/GET_USERS_FULFILLED';
export const GET_USERS_REJECTED = 'redux-start/users/GET_USERS_REJECTED';

// 액션 생성 함수
export function getUsersStart() {
    return {
        type: GET_USERS_START,
    };
}
export function getUsersSuccess(data) {
    return {
        type: GET_USERS_SUCCESS,
        data,
    };
}
export function getUsersFail(error) {
    return {
        type: GET_USERS_FAIL,
        error,
    };
}

// 초기값
const initialState = {
    loading: false,
    data: [],
    error: null,
};

// 리듀셔
export default function reducer(state = initialState, action) {
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

// redux-thunk
export function getUsersThunk() {
    return async (dispatch) => {
        try {
            dispatch(getUsersStart());
            const res = await axios.get('https://api.github.com/users');
            dispatch(getUsersSuccess(res.data));
        } catch (error) {
            dispatch(getUsersFail(error));
        }
    };
}

// redux-promise-middleware
export function getUsersPromise() {
    return {
        type: GET_USERS,
        payload: async () => {
            const res = await axios.get('https://api.github.com/users');
            return res.data;
        },
    };
}
