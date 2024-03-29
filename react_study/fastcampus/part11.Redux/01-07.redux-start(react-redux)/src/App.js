import logo from './logo.svg';
import './App.css';
import TodoFormContainer from './containers/TodoFormContainer';
import TodoListContainer from './containers/TodoListContainer';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <TodoListContainer />
                <TodoFormContainer />
            </header>
        </div>
    );
}

export default App;
