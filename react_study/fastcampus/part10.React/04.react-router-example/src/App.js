import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Links from './components/Links';
import NavLinks from './components/NavLinks';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Login from './pages/Login';

const isLogin = false;

function App() {
    return (
        <BrowserRouter>
            <Links />
            <NavLinks />
            <Routes>
                <Route path="/login" element={isLogin ? <Navigate to="/" /> : <Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
