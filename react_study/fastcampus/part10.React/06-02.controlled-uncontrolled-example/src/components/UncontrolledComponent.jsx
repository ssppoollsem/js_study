import React from 'react';

class UncontrolledComponent extends React.Component {
    inputRef = React.createRef();

    render() {
        console.log('이니셜 렌더', this.inputRef);
        return (
            <div>
                {/* <input type="text" id="my-input" /> */}
                <input type="text" ref={this.inputRef} />
                <button onClick={this.click}>전송</button>
            </div>
        );
    }

    componentDidMount() {
        console.log('componentDidMount', this.inputRef);
    }

    click = () => {
        // // input 엘리먼트의 현재 상태 값(value)을 꺼내서 전송한다.
        // const input = document.querySelector('#my-input');
        // console.log(input.value);
        console.log(this.inputRef.current.value);
    };
}

export default UncontrolledComponent;
