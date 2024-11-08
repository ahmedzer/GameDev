// App.jsx
import React from 'react';
import './App.css';
import {ThemeProvider} from "./Components/ThemeContext.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Home from "./Pages/Home/Home.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectFps from "./Pages/Project/Project.jsx";
import ProjectTps from "./Pages/Project/PorjectTps.jsx";
import ProjectRPG from "./Pages/Project/ProjectRPG.jsx";

function App() {
    return (
        <>
            <ThemeProvider>
                <NavBar></NavBar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project" element={<ProjectFps />} />
                    <Route path="/project2" element={<ProjectTps />} />
                    <Route path="/project3" element={<ProjectRPG />} />
                </Routes>
            </ThemeProvider>
        </>
    );
}

export default App;
