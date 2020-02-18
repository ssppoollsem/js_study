# props

`props`는 properties를 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소이다.
`props` 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정할 수 있다.(현재 상황에서는 App 컴포넌트가 부모 컴포넌트이다.)

## JSX내부에서 props 렌더링
`props` 값은 컴포넌트 함수의 파라미터로 받아 와서 사용할 수 있다. `props`는 렌더링할 때 2장에서 배웠던 것처럼 {} 기호로 깜싸 주면 된다.

## props 기본값 설정: defaultProps
`props`값을 따로 지정하지 않았을 때 보여 주는 기본값을 설정하는 것이 `defaultProps`이다.
설정하는 방법은 다음과 같다.

```javascript
const MyComponent = props => {
    return <div>안녕하세요. 제 이름은{props.name}입니다.</div>;
}
MyComponent.defaultProps = {
    name:'기본 이름'
}
```

## 태그 사이의 내용을 보여 주는 children
```javascript
// App.js
function App(){
	return <MyComponent>리액트</MyComponent>
}

// MyComponent.js
const MyComponent = props => {
    return (
        <>
            안녕하세요. 제 이름은{props.name}입니다.
            children 값은 {props.children}
        </>
    );
}
MyComponent.defaultProps = {
    name:'기본 이름'
}
```

`MyComponent`에 텍스트를 나타내기 위해서는 `{props.children}`를 사용하면 된다.

## 비구조화 할당 문법을 통해 props 내부 값 추출하기

현재 MyComponent에서 `props` 값을 조회할 때마다 props.이라는 키워드를 앞에 붙여 주고 있다.
이러한 작업을 더 편하게 하기 위해 ES6의 비구조화 할당 문법을 사용할 수 있다.

```javascript
const MyComponent = props => {
    const {name,children} = props;
    return (
        <>
            안녕하세요. 제 이름은{name}입니다.
            children 값은 {children}
        </>
    );
}
MyComponent.defaultProps = {
    name:'기본 이름'
}
```

비구조화 할당 문법을 사용하면 이렇게 짧은 코드를 사용할 수 있다.
함수의 파라미터 부분에서도 사용할 수 있다.

```javascript
const MyComponent = ({name,children}) => {
    return (
        <>
            안녕하세요. 제 이름은{name}입니다.
            children 값은 {children}
        </>
    );
}
MyComponent.defaultProps = {
    name:'기본 이름'
}
```

## propTypes를 통한 props 검증
컴포넌트의 필수 `props`를 지정하거나 `props`의 타입을 지정할 때는 `propTypes`를 사용한다.  
우선 `propTypes`를 사용하기 위해서는 import구문을 사용하여 불러와야 한다.

> import PropTypes from prop-types

```javascript
//MyComponent.js
MyComponent.propTypes = {
    name:PropTypes.string
}

//App.js
function App(){
	return <MyComponent name={3}>리액트</MyComponent> //오류 발생
}
```

이렇게 설정하면 name 값은 무조건 문자열 형태로 전달해야 된다는 것을 의미한다.  
name 값을 문자열이 아닌 숫자로 전달하면 오류가 발생한다.

## isRequired를 사용하여 필수 propTypes 설정
`propTypes`를 지정하지 않았을 때 경고 메시지를 띄어 주는 작업을 해보자.  
`propTypes`를 지정할 때 뒤에 `isRequired`를 붙여 주면 된다.  

```javascript
MyComponent.propTypes = {
    favoriteNumber:PropTypes.number.isRequired
}
```

## 더 많은 PropTypes

* array : 배열
* arrayOf(다른 PropType) : 특정 PropType으로 이루어진 배열을 의마한다. 예를 들어 arrayOf(PropTypes.number)는 숫자로 이루어진 배열이다.
* bool : true 혹은 false 값
* func : 함수
* object : 객체
* string : 문자열
* symbol : ES6의 Symbol
* node : 렌더링할 수 있는 모든 것(숫자, 문자열, 혹은 JSX 코드, children도 node PropType이다.)
* instanceOf(클래스): 특정 클래스의 인스턴스(예:instanceOf(MyClass))
* oneOf(['dog','cat']) : 특정 클래스의 인스턴스(예:instanceOf(MyClass))
* oneOfType([React.PropTypes.string, PropTypes.number]) : 주어진 배열 안의 종류 중 하나
* objectOf(React.PrpTypes.number) : 객체의 모든 키 값이 인자로 주어진 PropType인 객체
* shape({name : PropTypes.string, num : PropTypes.number}) : 주어진 스키마를 가진 객체
* any : 아무 종류

더 자세한 정보는 https://github.com/facebook/prop-types에서 확인할 수 있다.


## 클래스형 컴포넌트에서 props 사용하기

클래스형 컴포넌트에서 props를 사용할 때는 render 함수에서 this.props를 조회하면 된다.
그리고 `defaultProps`와 `propTypes`는 똑같은 방식으로 설장할 수 있다. 

```javascript
class MyComponent extends Component {
    render() {
        const {name,favoriteNumber,children} = this.props; // 비구조화 할당
        return (
            <>
             안녕하세요. 제 이름은{name}입니다.
             children 값은 {children}.<br />
             제가 가장 좋아하는 숫자는 {favoriteNumber} 입니다.
            </>
        )
    }
}
```

클래스형 컴포넌트에서 `defaultProps`와 `propTypes`를 설정할 때 class 내부에 지정하는 방법도 있다.

```javascript
class MyComponent extends Component {
    static defaultProps = {
        name:'기본 이름'
    };
    static propTypes = {
        name:PropTypes.string,
        favoriteNumber:PropTypes.number.isRequired
    };
    render() {
        const {name,favoriteNumber,children} = this.props; // 비구조화 할당
        return (
            <>
             안녕하세요. 제 이름은{name}입니다.
             children 값은 {children}.<br />
             제가 가장 좋아하는 숫자는 {favoriteNumber} 입니다.
            </>
        )
    }
}
```

#### defaultProps와 propTypes를 꼭 사용해야 하는가?
```
이 두가지 설정은 컴포넌트의 필수 사항이 아니므로 꼭 사용할 필요가 없다.  
하지만 React를 사용하여 큰 규모의 프로젝트를 진행한다면, 특히 다른 개발자들과 협업한다면  
해당 컴포넌트에 어떤 props가 필요한지 알기 쉬워 개발 능률이 좋아진다.
```

