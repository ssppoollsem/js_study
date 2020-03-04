# 리액트의 이벤트 시스템

리액트의 이벤트 시스템은 웹 브라우저의 `HTML` 이벤트와 인터페이스가 동일하기 때문에 사용법이 꽤 비슷하다.

## 이벤트를 사용할 때 주의 사항

1. 이벤트 이름은 카멜 표기법으로 작성한다.  
예를 들어 `HTML`의 `onclick`은 리액트에서 `onClick`으로 작성해야 한다. 또 `onkeyup`은 `onKeyUp`으로 작성한다.

2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아닌, 함수형태의 값을 전달한다.  
`HTML`에서 이벤트를 설정할 때는 큰따옴표 안에 실행할 코드를 넣었지만, 리액트에서는 함수 형태의 객체를 전달한다.
또는 렌더링 부분 외부에 미리 만들어서 전달해도 된다.

3. `DOM`요소에만 이벤트를 설정할 수 있다.  
즉 `div`,`button`,`form`,`span` 등의 `DOM` 요소에는 이벤트를 설정할 수 있지만, 우리가 직접 만든
컴포넌트에는 이벤트를 자체적으로 설정할 수 없다.

예를 들어 다음과 같이 `MyComponent`에 `onClick` 값을 설정하면 `MyComponent`를 클릭할 때 `doSomething`함수를 실행하는 것이 아니라,
그냥 이름이 `onClick`인 `props`를 `MyComponent`에게 전달해 줄 뿐이다.
따라서 컴포넌트에 자체적으로 이벤트를 설정할 수 없다. 하지만 전달받은 `props`를 컴포넌트 내부의 `DOM` 이벤트로 설정할 수는 있다.

> <div onClick={this.props.onClick}></div>

## 이벤트 종류

참고 : https://reactjs.org/docs/events.html

## 예제로 이벤트 핸들링 익히기

### 컴포넌트 생성 및 불러오기

#### 1. 컴포넌트 생성

```javascript
// EventPractice.js
import React,{Component} from 'react';

class EventPractice extends Component {
    render() {
        return (
            <>
                <h1>이벤트 연습</h1>
            </>
        )
    }
}

export default EventPractice;
```

#### 2. onChage 이벤트 핸들링하기

```javascript
class EventPractice extends Component {
    render() {
        return (
            <>
                <h1>이벤트 연습</h1>
                <input type="text" name="message" placeholder="아무거나 입력해 보세요" onChange={(e) => {console.log(e);}} />
            </>
        )
    }
}
```

여기서 콘솔에 기록되는 e 객체는 `SyntheticEvent`로 웹 브라우저의 네이티브 이벤트를 감싸는 객체이다.
네이티브 이벤트와 인터페이스가 같으므로 순수 자바스크립트에서 `HTML` 이벤트를 다룰 때와 똑같이 사용하면 된다.

`SyntheticEvent` 및 네이티브 이벤트와 달리 이벤트가 끝나고 나면 이벤트가 초기화되므로 정보를 참조할 수 없다.
예를 들어, 0.5초 뒤에 e 객체를 참조하면 e 객체 내부의 모든 값이 비워지게 된다.
만약 비동기적으로 이벤트 객체를 참조할 일이 있다면 `e.persist()` 함수를 호출해 주어야 한다.