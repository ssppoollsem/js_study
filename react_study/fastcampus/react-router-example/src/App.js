import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
