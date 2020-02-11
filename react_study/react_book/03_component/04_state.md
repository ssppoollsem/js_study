# state

리액트에서 `state`는 컴포넌트 내부에서 바뀔 수 있는 값을 의미한다. `props`는 컴포넌트가 사용되는 과정에서
부모 컴포넌트가 설정하는 값이며, 컴포넌트 자신은 해당 `props`를 읽기 전용으로만 사용할 수 있다.  
`props`를 수정하려면 부모 컴포넌트에서만 바꿀 수 있다.  

리액트에서 두 종류의 `state`가 있다. 하나는 클래스형 컴포넌트가 지니고 있는 `state`이고, 다른 하나는 함수형 컴포넌트에서 
`useState`라는 함수를 통해 사용하는 `state`이다.

## 클래스형 컴포넌트의 state

```javascript
constructor(props){
    super(props);
    //state 초깃값 설정하기
    
    this.state = {
        number : 0
    };
}
```

이는 컴포넌트의 생성자 메서드이다. 클래스형 컴포넌트에서 `constructor`를 작성할 때는 반드시 `super(props)`를 호출해 주어야 한다.
이 함수가 호출되면 현재 클래스형 컴포넌트가 상속하고 있는 리액트의 `Component` 클래스가 지닌 생성자 함수를 호출해 준다.

```javascript
class Counter extends Component {
    constructor(props){
        super(props);
        
        //state 초깃값 설정하기
        this.state = {
            number : 0
        };
    }
    render() {
        const {number} = this.state; // state를 조회할 때는 this.state로 조회합니다.
        return (
            <>
                <h1>{number}</h1>
                <button
                    // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
                    onClick = {() => {
                        // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
                        this.setState({number : number + 1});
                    }}
                >+1</button>
            </>
        )
    }
}
```

render 함수에서 현재 state를 조회할 때는 this.state를 조회하면 된다. 함수내부에서는 `this.setState`라는 함수를 사용하였는데,
이 함수가 `state` 값을 바꿀 수 있게 해준다.

## state 객체 안에 여러 값이 있을 때

```javascript
class Counter extends Component {
    constructor(props){
        super(props);
        //state 초깃값 설정하기
        
        this.state = {
            number : 0,
            fixedNumber : 0
        };
    }
    render() {
        const {number,fixedNumber} = this.state; // state를 조회할 때는 this.state로 조회합니다.
        return (
            <>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button
                 // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
                 onClick = {() => {
                     // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
                     this.setState({number : number + 1});
                 }}
                >+1</button>
            </>
        )
    }
}
```

버튼이 클릭될 때 `fixedNumber` 값은 그대로 두고 `number`값만 바꾸는데 그렇다고 해서 `this.setState` 함수를 
사용할 때 인자로 전달되는 개체 내부에 `fixedNumber`를 넣어 주지는 않는다.  
`this.setState` 함수는 인자로 전달된 객체 안에 들어 있는 값만 바꾸어 준다.

## state를 constructor에서 꺼내기

다른 방식으로도 `state`의 초깃값을 지정해 줄 수 있다.

```javascript
class Counter extends Component {
    state = {
        number : 0,
        fixedNumber : 0
    };
    
    render() {
        const {number,fixedNumber} = this.state; // state를 조회할 때는 this.state로 조회합니다.
        return (
            <>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button
                 // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
                 onClick = {() => {
                     // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
                     this.setState({number : number + 1});
                 }}
                >+1</button>
            </>
        )
    }
}
```

이렇게 하면 `constructor`를 선언하지 않고 `state` 초깃값을 설정할 수 있다.

## this.setState에 객체 대신 함수 인자 전달하기

`this.setState`를 사용하여 `state`값을 업데이트할 때는 상태가 비동기적으로 업데이트된다.

```javascript
onClick = {() => {
    // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
    this.setState({number : number + 1});
    this.setState({number : this.state.number + 1})
}}
```

코드를 위와 같이 작성하면 `this.setState`를 두 번 사용하는 것임에도 불구하고 숫자가 1씩 더해진다.
`this.setState`를 사용한다고 해서 `state` 값이 바로 바뀌지 않기 때문이다.

이에 대한 해결책은 `this.setState`를 사용할 때 객체 대신에 함수를 인자로 넣어 주는 것이다.

```javascript
this.setState((prevState,props) => {
    return {
        // 업데이트하고 싶은 내용
    }
})
```

`prevState`는 기존 상태이고, `props`는 현재 지니고 있는 `props`를 가리킨다. 만약 업데이트하는 과정에서 `props`가 필요하지 않다면 생략해도 된다.

```javascript
this.setState((prevState,props) => {
    return {
        // 업데이트하고 싶은 내용
        number : prevState.number + 1
    }
})

// 위 코드와 아래 코드는 완전히 똑같은 기능을 한다.
// 아래 코드는 함수에서 바로 객체를 반환한다는 의미이다.
this.setState(prevState => ({
    number: prevState.number + 1
}))
```

`onClick`에서 두 번째로 `this.setState` 함수를 사용할 때는 화살표 함수에서 바로 객체를 반환하도록 했기 때문에
`prevState => ({})`와 같은 형태로 코드가 이루어진다.

## this.setState가 끝난 후 특정 작업 실행하기

`setState`를 사용하여 값을 업데이트하고 난 다음에 특정 작업을 하고 싶을 때는 `setState`의 두 번째 파라미터로 콜백함수를 등록하여
작업을 처리할 수 있다.

```javascript
onClick = {() => {
    this.setState(
        {
            number:number+1
        },
        () => {
            console.log('방금 setSTate가 호출되었습니다.');
            console.log(this.state);
        }
    )
}}
```

## 함수형 컴포넌트에서 useState 사용하기

리액트 16.8 이전 버전에서는 함수형 컴포넌트에서 `state`를 사용할 수 없었다. 하지만 16.8 이후부터는
`useState`라는 함수를 사용하여 함수형 컴포넌트에서도 `state`를 사용할 수 있다.
이 과정에서 `Hooks`라는 것을 사용하는데 `Hooks`의 종류는 다양하지만, 여기서는 `useState`만 알아보자.

## 배열 비구조화 할당

`Hooks`를 사용하기 전에 배열 비구조화 할당을 알아보자. 배열 비구조화 할당은 비구조화 할당과과 비슷하다.
즉, 배열 안에 들어 있는 값을 쉽게 추출할 수 있도록 해 주는 문법이다.

```javascript
const array = [1,2];
const one = array[0];
const two = array[1];

// 배열 비구조화 할당
const array = [1,2];
const [one,two] = array;
```

## useState 사용하기

배열 비구조화 할당 문법을 알면 `useState` 사용 방법을 쉽게 이해할 수 있다.

```javascript
import React, {useState} from 'react';

const Say = () => {
    const [message,setMessage] = useState('');
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히 가세요!');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1>{message}</h1>
        </div>
    );
};

export default Say;
```

`useState`함수의 인자에는 상태의 초깃값을 넣어준다. 클래스형 컴포넌트에서의 `state` 초깃값은 객체 형태를 넣어 주어야 한다.
`useState`에서는 반드시 객체가 아니여도 숫자,문자열,객체,배열일 수도 있다.

함수를 호출하면 배열이 반환되는데, 배열의 첫 번째 원소는 현재 상태이고, 두 번째 원소는 상태를 바꿔주는 함수이다. 
이 함수를 세터함수라고 부르낟. 그리고 배열 비구조화 할당을 통해 자유롭게 이름을 정할 수 있다.
