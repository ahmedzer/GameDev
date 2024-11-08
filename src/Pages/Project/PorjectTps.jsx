import React from 'react';
import './project.css';
import TPSVideo from '../../assets/videos/TPS.mp4';
import {useTheme} from "../../Components/ThemeContext.jsx";
import Slide1 from '../../assets/carouselSlides/project1/slide1.png'
import Slide2 from '../../assets/carouselSlides/project1/slide2.png'
import Slide3 from '../../assets/carouselSlides/project1/slide3.png'
import Slide4 from '../../assets/carouselSlides/project1/slide4.png'
import MyCarousel from "../../Components/Carousel/Carousel.jsx";


function ProjectTps() {
    console.log(TPSVideo);
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
                <video width="320" height="240" autoPlay muted loop src={TPSVideo}>
                </video>
                <div className={"content"}>
                    <h3 className={`title  "light"}`}>Advanced Third-Person Shooter - Unreal Engine 5</h3>
                    <p className={"p-description"}>This third-person shooter game is a personal project I began in June
                        2024. In this project, I implemented advanced gameplay mechanics and animation techniques to
                        enhance realism and player engagement. Key features include custom character animations, dynamic
                        weapon switching, drone integration, and sophisticated enemy AI.</p>
                </div>

            </div>
            <h4 className={`title ${isDarkMode ? "dark" : "light"}`}>Project Highlights</h4>
            <div className={"list-container"}>
                <p>In this project, I explored and implemented several advanced Unreal Engine techniques:</p>
                <ul>
                    <li><strong>Advanced Character Animation</strong>: Used Unreal’s 2D Blendspaces and a complex
                        animation state machine to create smooth, realistic transitions for character movements,
                        stances, and combat actions.
                    </li>
                    <li><strong>Weapon Switching System</strong>: Developed a fluid weapon switching system that
                        maintains animation continuity and player responsiveness.
                    </li>
                    <li><strong>Drone Integration</strong>: Designed a controllable drone feature that allows players to
                        scout and strategize, adding a tactical element to gameplay.
                    </li>
                    <li><strong>Enemy AI with Behavior Trees</strong>: Created advanced AI using Unreal's AI Controller
                        and Behavior Tree systems, with custom <code>BTTask</code> nodes for patrol, aiming, and
                        attacking behaviors.
                    </li>
                    <li><strong>AI Aiming and Targeting</strong>: Implemented accurate AI aiming mechanics, enabling
                        enemies to effectively track and target the player.
                    </li>
                </ul>
            </div>
            <h4 className={`title ${isDarkMode ? "dark" : "light"}`}>What I Learned</h4>
            <div className={"list-container"}>
                <p>This project provided hands-on experience with several advanced Unreal Engine techniques and
                    broadened my skills in game development. Key takeaways included:</p>
                <ul>
                    <li>Creating complex animation state machines and using 2D Blendspaces for seamless, realistic
                        character animations.
                    </li>
                    <li>Developing a structured weapon system for efficient and responsive weapon switching.</li>
                    <li>Designing unique gameplay mechanics, like drone control, to enhance strategic gameplay.</li>
                    <li>Building robust enemy AI with Behavior Trees and custom tasks to create dynamic and challenging
                        encounters.
                    </li>
                    <li>Understanding Unreal’s AI Controller to manage sophisticated enemy behaviors, including precise
                        aiming and targeting.
                    </li>
                    <li>Designing and optimizing levels with strategic building placement for improved performance and
                        flow.
                    </li>
                    <li>Strengthening problem-solving abilities by tackling complex animations, AI logic, state machine
                        structures, and level design challenges.
                    </li>
                </ul>
            </div>
            <MyCarousel slides={slides}/>
        </>


    );
}

export default ProjectTps;
