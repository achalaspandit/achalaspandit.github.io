import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SocialSidebar from "./components/SocialSidebar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import DarkModeToggle from "./components/DarkModeToggle";
import "./index.css";


function App() {
    return (
        <Router>
            <SocialSidebar />
            <div className="min-h-screen bg-background dark:bg-darkBackground transition-colors">
                <Navbar />
                <div className="max-w-4xl mx-auto px-4 py-8">
                    <DarkModeToggle />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;