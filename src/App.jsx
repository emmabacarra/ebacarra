import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Error from './pages/error';
import '../stylesheets/input.css';

// import './App.css'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Projects" element={<Projects />} />
                    <Route path="/Resume" element={<Resume />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}