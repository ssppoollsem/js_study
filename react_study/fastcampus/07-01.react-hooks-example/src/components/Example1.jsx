import React from 'react';

// 클래스
export default class Example1 extends React.Component {
    state = {
        count: 0,
    };
    render() {
        const { count } = this.state;
        return (
            <div>
                <p>You clicked {count} times</p>
                <button onClick={this.click}>Click me</button>
            </div>
        );
    }
    click = () => {
        this.setState({ count: this.state.count + 1 });
    };
}
