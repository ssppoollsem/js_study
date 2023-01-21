import './App.css';
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import Home from './pages/Home';
import Todos from './pages/Todos';
import Users from './pages/Users';
import history from './history';
import { ConnectedRouter } from 'connected-react-router';

function App() {
    return (
        <ConnectedRouter history={history}>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/users" element={<Users />} />
        </ConnectedRouter>
    );
}

export default App;
