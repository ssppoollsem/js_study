import './App.css';
import React from 'react';

// class Person extends React.PureComponent {
//     // React.PureComponent와 동일한 기능
//     // shouldComponentUpdate(previousProps) {
//     //     for (const key in this.props) {
//     //         if (previousProps[key] !== this.props[key]) return true;
//     //     }
//     //     return false;
//     // }

//     render() {
//         console.log('Person render');
//         const { name, age } = this.props;
//         return (
//             <p>
//                 {name} / {age}
//             </p>
//         );
//     }
// }

// class App extends React.Component {
//     state = {
//         text: '',
//         persons: [
//             { id: 1, name: 'mark', age: 22 },
//             { id: 2, name: 'ana', age: 42 },
//         ],
//     };

//     // componentDidMount() {
//     //     setInterval(() => {
//     //         this.setState({ count: this.state.count + 1 });
//     //     }, 1000);
//     // }

//     render() {
//         // if (this.state.count % 2 === 0) {
//         //     return (
//         //         <ul>
//         //             <Foo key="2">second</Foo>
//         //             <Foo key="3">third</Foo>
//         //         </ul>
//         //     );
//         // }

//         // return (
//         //     <ul>
//         //         <Foo key="1">first</Foo>
//         //         <Foo key="2">second</Foo>
//         //         <Foo key="3">third</Foo>
//         //     </ul>
//         // );

//         const { text, persons } = this.state;
//         return (
//             <div>
//                 <input type="text" value={text} onChange={this._change} />
//                 <ul>
//                     {persons.map((person) => {
//                         return <Person {...person} key={person.id} />;
//                     })}
//                 </ul>
//             </div>
//         );
//     }
//     _change = (e) => {
//         this.setState({
//             ...this.state,
//             text: e.target.value,
//         });
//     };
// }

const Person = React.memo(({ name, age }) => {
    console.log('Person render');
    return (
        <p>
            {name} / {age}
        </p>
    );
});

function App() {
    const [state, setState] = React.useState({
        text: '',
        persons: [
            { id: 1, name: 'mark', age: 22 },
            { id: 2, name: 'ana', age: 42 },
        ],
    });

    const toPersonClick = React.useCallback(() => {}, []);

    const { text, persons } = state;
    return (
        <div>
            <input type="text" value={text} onChange={change} />
            <ul>
                {persons.map((person) => {
                    return <Person {...person} key={person.id} onClick={toPersonClick} />;
                })}
            </ul>
        </div>
    );

    function change(e) {
        setState({
            ...state,
            text: e.target.value,
        });
    }
}

export default App;
