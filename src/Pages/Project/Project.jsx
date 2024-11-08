import React from 'react';
import './project.css';
import FPSVideo from '../../assets/videos/FPS.mp4';
import {useTheme} from "../../Components/ThemeContext.jsx";
function ProjectFps() {
    console.log(FPSVideo);
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <>
            <div className="video">
                <video width="320" height="240" autoPlay muted loop src={FPSVideo}>
                </video>
                <div className={"content"}>
                    <h3 className={`title  "light"}`}>Sample FPS Game - Unreal Engine 4</h3>
                    <p className="p-description">In this project, created as part of my course on Unreal Engine 4 game
                        development, I built a first-person shooter (FPS) game using Unreal Engine 4. I utilized C++ to
                        develop core game mechanics, focusing on clean, maintainable code. I applied Object-Oriented
                        Programming principles, implemented AI behaviors for enemy characters, and balanced game design
                        to create an engaging player experience. This project allowed me to explore when to use
                        Blueprints versus C++ and deepened my understanding of Unreal's gameplay framework, modern game
                        development techniques, and problem-solving in a game development context.</p>
                </div>

            </div>
            <h4 className={`title ${isDarkMode ? "dark" : "light"}`}>What I Learned</h4>
            <div className={"list-container"}>
                <p>Throughout the course, I gained valuable skills and knowledge, including:</p>

                <ul>
                    <li>How to make games in Unreal Engine 5 using both Blueprints and C++.</li>
                    <li>Mastery of C++, the games industry-standard language.</li>
                    <li>Understanding Object-Oriented Programming and its application in game development.</li>
                    <li>Core game design principles for creating intuitive and engaging player experiences.</li>
                    <li>Best practices for clean, maintainable, and efficient code.</li>
                    <li>Artificial Intelligence programming for enemy behaviors and decision-making.</li>
                    <li>When to use Blueprints for rapid prototyping and when to rely on C++ for performance-critical
                        features.
                    </li>
                    <li>How to use Unreal's Gameplay Framework to streamline game logic and development.</li>
                    <li>Strong problem-solving skills and techniques to tackle complex development challenges.</li>
                </ul>
            </div>

        </>


    );
}

export default ProjectFps;
