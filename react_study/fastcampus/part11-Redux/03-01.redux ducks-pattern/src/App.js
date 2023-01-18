import './App.css';
import TodoFormContainer from './containers/TodoFormContainer';
import TodoListContainer from './containers/TodoListContainer';
import UserListContainer from './containers/UserListContainer';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <UserListContainer />
                <TodoListContainer />
                <TodoFormContainer />
            </header>
        </div>
    );
}

export default App;
