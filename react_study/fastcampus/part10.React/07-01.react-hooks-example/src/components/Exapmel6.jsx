import { useReducer } from 'react';

// reducer : state를 변경하는 로직이 들어간 함수
const reducer = (state, action) => {
    if (action.type === 'PLUS') {
        return {
            count: state.count + 1,
        };
    }
    return state;
};

// dispatch : action 객체를 넣어서 실행
// action : 객체이고 필수 프로퍼티로 type을 가진다.

export default function Example6() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <div>
            <p>You clicked {state.count} times</p>
            <button onClick={click}>Click me</button>
        </div>
    );

    function click() {
        dispatch({ type: 'PLUS' });
    }
}
