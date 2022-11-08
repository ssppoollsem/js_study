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
