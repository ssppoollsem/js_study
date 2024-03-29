import { useState, useMemo, useCallback } from 'react';

function sum(persons) {
    return persons.map((person) => person.age).reduce((l, r) => l + r, 0);
}

export default function Example7() {
    const [value, setValue] = useState('');
    const [persons] = useState([
        { name: 'Makr', age: 39 },
        { name: 'Hanna', age: 30 },
    ]);
    const count = useMemo(() => {
        return sum(persons);
    }, [persons]);

    const click = useCallback(() => {
        console.log(value);
    }, []);

    return (
        <div>
            <input value={value} onChange={change} />
            <p>{count}</p>
            <button onClick={click}>Click</button>
        </div>
    );

    function change(e) {
        setValue(e.target.value);
    }
}
