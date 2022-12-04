// 데이터를 Get 하기(1) - Consumer
// 1. 컨텍스트를 가져온다.
// 2. 컨텍스트.Consumer를 사용한다.
// 3. value를 사용

import PersonContext from '../contexts/PersonContext';

export default function Example1() {
    return (
        <PersonContext.Consumer>
            {(persons) => (
                <ul>
                    {persons.map((person) => (
                        <li>{person.name}</li>
                    ))}
                </ul>
            )}
        </PersonContext.Consumer>
    );
}
