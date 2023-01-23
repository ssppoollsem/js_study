// 데이터를 Get 하기(2) - class
// 1. static contextType 에 컨텍스트를 설정한다.
// 2. this.context => value 이다.
// static 여러개를 사용못함

import React from 'react';
import PersonContext from '../contexts/PersonContext';

export default class Example2 extends React.Component {
    // static contextType = PersonContext;
    render() {
        const persons = this.context;
        return (
            <ul>
                {persons.map((person) => (
                    <li>{person.name}</li>
                ))}
            </ul>
        );
    }
}

Example2.contextType = PersonContext;
