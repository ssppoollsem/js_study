import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Links from './components/Links';
import NavLinks from './components/NavLinks';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

function App() {
    return (
        <BrowserRouter>
            <Links />
            <NavLinks />
            <Routes>
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
