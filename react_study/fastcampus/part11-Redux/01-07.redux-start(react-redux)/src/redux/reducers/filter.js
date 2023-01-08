import { SHOW_ALL, SHOW_COMPLETE } from '../actions';

const initialState = 'ALL';

export default function filter(previousState = initialState, action) {
    // 초기값을 설정해 주는 부분
    // if (previousState === undefined) {
    //     return [];
    // }

    if (action.type === SHOW_COMPLETE) {
        return 'COMPLETE';
    }

    if (action.type === SHOW_ALL) {
        return 'ALL';
    }

    // previousState.push('');

    return previousState;
}
