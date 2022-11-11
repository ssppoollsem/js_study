# React

### Ch 1. React Getting Started

```js
// 1.  리액트 컴포넌트 => HTMLElement 연결하기
import ReactDOM from 'react-dom';

// 2. 리액트 컴포넌트 만들기
import React from 'react';
```

### Ch 2

## Ch 2-3. JSX 문법

-   최상위 요소가 하나여야 한다.
-   최상위 요소 리턴하는 경우, ()로 감싸야 한다.
-   자식들을 바로 랜더링하고 싶으면, <>자식들 </>를 사용한다. => Fragment

```javascript
ReactDOM.render(
    <>
        <div a="a">
            <div>
                <h1>주제</h1>
                <ul>
                    <li>리액트</li>
                    <li>뷰</li>
                </ul>
            </div>
        </div>
        <div a="a">
            <div>
                <h1>주제</h1>
                <ul>
                    <li>리액트</li>
                    <li>뷰</li>
                </ul>
            </div>
        </div>
    </>,
    document.querySelector('#root')
);
```

-   자바스크립트 표현식을 사용하려면, {표현식}를 이용한다.

```javascript
const title = '주제';

ReactDOM.render(
    <div a="a">
        <div>
            <h1>{title}</h1>
            <ul>
                <li>리액트</li>
                <li>뷰</li>
            </ul>
        </div>
    </div>,
    document.querySelector('#root')
);
```

-   if 문은 사용할 수 없다. (삼항 연산자 혹은 &&를 사용한다.)
-   style을 이용해 인라인 스타일링이 가능하다.
-   class 대신 className을 사용해 class를 적용할 수 있다.
-   자식요소가 있으면, 꼭 닫아야 하고, 자식요소가 없으면 열면서 닫아야 한다.

---

## Ch 2-4. Props와 State

-   Props는 컴포넌트 외부에서 컴포넌트에게 주는 데이터이다.
-   State는 컴포넌트 내부에서 변경할 수 있는 데이터이다.
-   둘 다 변경이 발생하면, 랜더가 다시 일어날 수 있다.

---

## Ch 2-5. Event Handling

-   camelCase로만 사용할 수 있다. (onClick, onMouseEnter)
-   이벤트에 연결된 자바스크립트 코드는 함수이다. (이벤트={함수}와 같이 쓴다.)
-   실제 DOM 요소들에만 사용 가능하다. (리액트 컴포넌트에 사용하면, 그냥 props로 전달한다.)

## Ch 2-6 Component Lifecycle

![리액트 라이프 사이클 훅](https://velog.velcdn.com/images%2Fprotect-me%2Fpost%2F59348e73-97f8-414e-bea7-d5fbe799024a%2Fimage.png)

### componentWillReceiveProps

-   props를 새로 지정했을 때 바로 호출
-   state의 변경에 반응하지 않음
    ⇒ 여기서 prop의 값에 따라 state를 변경해야 한다면 setState를 이용해 state를 변경한다.
    ⇒ 그러면 다음 이벤트로 각각 가는 것이 아니라 한 번에 변경된다.

### shouldComponentUpdate

-   props만 변경되어도
-   state만 변경되어도
-   props & state 둘 다 변경되어도
-   new Props 와 new State를 인자로 해서 호출
-   return type이 boolen
    : true이면 render
    : false이면 render가 호출되지 않음
    : 이 함수를 구현하지 않으면, 디폴트는 true

### componentWillUpdate =>(v16.3 이후 변경) getSnapshotBeforeUpdate

-   컴포넌트가 재렌더링 되기 직전에 불림
-   여기선 setState 같은 것을 쓰면 안됨

### componentDidUpdate (render 이후)

-   컴포넌트가 재렌더링을 마치면 불림

### componentDidCatch

-   리액트 애플리케이션에서 발생하는 에러를 처리
