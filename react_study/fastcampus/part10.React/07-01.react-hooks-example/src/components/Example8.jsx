import { useState, createRef, useRef } from 'react';

function sum(persons) {
    return persons.map((person) => person.age).reduce((l, r) => l + r, 0);
}

export default function Example8() {
    const [value, setValue] = useState('');
    const input1Ref = createRef();
    const input2Ref = useRef();

    console.log(input1Ref.current, input2Ref.current);

    return (
        <div>
            <input value={value} onChange={change} />
            <input ref={input1Ref} />
            <input ref={input2Ref} />
        </div>
    );

    function change(e) {
        setValue(e.target.value);
    }
}
