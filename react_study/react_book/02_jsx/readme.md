# 코드 이해하기

scr/App.js 코드 이해하기
```javascript
import React from 'react';
```
이 코드는 리액트를 불러와서 사용할 수 있게 해준다. 리액트 프로젝트를 만들 때 
`node_modules`라는 디렉터리가 생성되는데 이 곳에 react모듈이 설치된다.  
그리고 `import`를 통해 리액트를 불러와서 사용할 수 있다.  
여기서 알아둘 것은 이렇게 모듈을 불러와서 사용하는 것은 원래 브라우저에는 없는 기능이라는 것이다.
이것은 `node.js`를 통해 지원하는 기능이다. 이러한 기능을 브라우저에서 사용하기 위해서는 `번들러`를 사용한다.
대표적인 `번들러`로는 `웹팩`, `Percel`, `breowserify`라는 도구들이 있으면 리액트에서는 주로 `웹팩`을 사용하는 추세이다.


```javascript
import logo from './logo.svg';
import './App.css';
```
이렇게 파일들을 불러오는 것은 웹팩의 로더라는 기능이 담당한다.
웹팩의 로더는 원래 직접 설치하고 설정해야되지만 `create-react-app`이 번거로운 작업은 모두 대신 해준다.


```javascript
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```
이 코드는 App이라는 컴포넌트를 만든다. function 키워드를 사용하여 컴포넌트를 만들었는데
이를 함수형 컴포넌트라고 한다. 프로젝트에서 컴포넌트를 렌더링하면 함수에서 반환하고 있는 내용을 나타낸다.
위 내용을 보면 `HTML`같이 보이지만 이 코드는 `JSX`라고 부른다. 