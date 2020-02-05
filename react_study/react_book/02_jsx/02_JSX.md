# JSX

## JSX란?

`JSX`는 자바스크립트의 확장문법이며 `XML`과 매우 비슷하게 생겼다.
이런 형식은 브라우저에서 실행되괴 전에 코드가 번들링되는 과정에서 바벨을 사용하여 
일반 자바스크립트로 변환된다.


#### JSX도 자바스크립트 문법인가?
```
JSX는 리액트로 개발할 때 사용되므로 공식적인 자바스크립트 문법이 아니다.
바벨을 통해 개발자들이 임의로 만든 문법 혹은 차기 자바스크립트의 문법들을 사용할 수 있다.
```


## JSX 장점

### 1. 보기 쉽고 익숙하다.  
`JSX`를 사용하는 편이 일반 자바습크립트로 사용한 코드보다 더 가독성이 높고 작성하기 쉽다.


### 2. 더욱 높은 활용도
`JSX`에서는 `HTML` 태그를 사용할 수 있는 뿐만 아니라, 컴포넌트도 `JSX` 안에서 작성할 수 있다.


```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```
여기서 App 컴포넌트를 마치 `HTML`태그 쓰듯이 사용하고 있다.


#### ReactDOM.render는 무엇인가?
```
이 코드는 컴포넌트를 페이지에 렌더링하는 역할을 하며, react-dom 모듈을 불러와 사용할 수 있다.  
이 함수의 첫 번째 파라미터에는 페이지에 렌더링할 내용을 JSX형태로 작성하고, 두 번째 파라미터에는 해당 JSX를 렌더링할 
document 내부 요소를 설정한다. 여기서 id가 root인 요소 안에 렌더링을 하도록 설정했는데 이 요소는 public/index.html 파일을 열면 볼수 있다.
```