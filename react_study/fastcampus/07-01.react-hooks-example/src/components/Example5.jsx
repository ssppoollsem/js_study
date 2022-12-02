import React from 'react';

// 함수
export default function Example5() {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        console.log('componentDidMount');

        return () => {
            // cleanup
            // componentWillUmount
        };
    }, []); // [] : 있으면 최초에만 실행됨(componentDidMount)

    React.useEffect(() => {
        console.log('componentDidMount & componentDidUpdate by count', count);

        return () => {
            // cleanup
            console.log('cleanup by count', count);
        };
    }, [count]); // count render 될때마다 실행됨(componentDidMount & componentDidUpdate by count)

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={click}>Click me</button>
        </div>
    );

    function click() {
        setCount(count + 1);
    }
}
