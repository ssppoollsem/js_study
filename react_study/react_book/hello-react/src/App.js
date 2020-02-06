import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
	const name = '리액트';
	const style = {
		// background-color 는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성된다.
		backgroundColor: 'black',
		color: 'aqua',
		fontSize: '48px',
		fontWeight: 'bold',
		padding: '16' // 단위를 생략하면 px로 지정된다.
	};
	return <div style={style}>{name}</div>;
}

export default App;
