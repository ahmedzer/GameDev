import React from 'react';
import './project.css';
import RPGVideo from '../../assets/videos/RPG.mp4';
import {useTheme} from "../../Components/ThemeContext.jsx";
import Slide1 from '../../assets/carouselSlides/project2/slide2-1.png'
import Slide2 from '../../assets/carouselSlides/project2/slide2-2.png'
import Slide3 from '../../assets/carouselSlides/project2/slide2-3.png'
import Slide4 from '../../assets/carouselSlides/project2/slide2-4.png'
import MyCarousel from "../../Components/Carousel/Carousel.jsx";


function ProjectRPG() {
    const { isDarkMode, toggleTheme } = useTheme();
    const slides = [
        {
            title:"",
            text: "",
            image: Slide1
        },
        {
            title:"",
            text: "",
            image: Slide2
        },
        {
            title:"",
            text: "",
            image: Slide3
        },
        {
            title:"",
            text: "",
            image: Slide4
        }
    ]
    return (
        <>
            <div className="video">
                <video width="320" height="240" autoPlay muted loop src={RPGVideo}>
                </video>
                <div className={"content"}>
                    <h3 className={`title  "light"}`}>RPG Game - Barbarian World</h3>
                    <p>This RPG game is a project I began in October 2024 as part of my Master 2 module, "MGA" (Moteur
                        Graphique et Audio). Set in a mythical barbarian world with elements inspired by Nordic mythology,
                        this project allows players to explore a vast, rugged landscape filled with medieval
                        architecture, natural terrain, and immersive environmental details.</p>
                </div>

            </div>
            <h4 className={`title ${isDarkMode ? "dark" : "light"}`}>Project Highlights</h4>
            <div className={"list-container"}>
                <p>In this RPG project, I have implemented the following features so far:</p>
                <ul>
                    <li><strong>Character Development</strong>: Designed and implemented a playable character with
                        essential RPG mechanics, allowing for interactive movement and actions within the game world.
                    </li>
                    <li><strong>Inventory and Item System</strong>: Built a functional inventory system that supports
                        item collection, storage, and usage, adding depth to player progression and interaction.
                    </li>
                    <li><strong>Map Design and World-Building</strong>: Developed the initial landscape using terrain
                        sculpting and landscape painting to create an immersive environment. Incorporated natural
                        foliage and environmental elements to enrich the game world.
                    </li>
                    <li><strong>Medieval Architecture</strong>: Integrated medieval-style houses and structures to bring
                        authenticity to the barbarian-themed setting.
                    </li>
                </ul>
            </div>
            <h4 className={`title ${isDarkMode ? "dark" : "light"}`}>What I Learned</h4>
            <div className={"list-container"}>
                <p>Working on this project has provided valuable experience in RPG game design and development within
                    Unreal Engine. Key skills developed so far include:</p>
                <ul>
                    <li>Creating an interactive character with foundational RPG mechanics.</li>
                    <li>Implementing a structured inventory and item system to enhance gameplay depth.</li>
                    <li>Using Unreal Engine’s landscape and foliage tools to design and paint realistic environments.
                    </li>
                    <li>Using Unreal Engine’s enhanced input system to provide responsive, immersive character
                        controls.
                    </li>

                    <li>Incorporating medieval architectural elements to build a cohesive and engaging world.</li>
                    <li>Expanding my understanding of world-building with a specific mythological theme and developing
                        visual storytelling techniques.
                    </li>
                </ul>
            </div>
            <MyCarousel slides={slides}/>
        </>


    );
}

export default ProjectRPG;
