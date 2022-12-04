// 데이터를 Get 하기(3) - functional
// 1. useContext로 컨텍스트를 인자로 호출한다.
// 2. useContext의 리턴이 value이다.

import { useContext } from 'react';
import PersonContext from '../contexts/PersonContext';

export default function Example3() {
    const persons = useContext(PersonContext);
    return (
        <ul>
            {persons.map((person) => (
                <li>{person.name}</li>
            ))}
        </ul>
    );
}
