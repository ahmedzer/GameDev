import React from 'react';
import '../../Components/ThemeContext.jsx'
import './Home.css'
import {useTheme} from "../../Components/ThemeContext.jsx";
import FPSVideo from '../../assets/videos/FPS.mp4'
import RPGVideo from '../../assets/videos/RPG.mp4'
import TPSVideo from '../../assets/videos/TPS.mp4'
import CardGrid from "../../Components/CardsGrid/CardsGrid.jsx";
import Scene from "../../Components/ThreeD.tsx";
import { SiCplusplus } from "react-icons/si";
import { BsNvidia } from "react-icons/bs";
import { MdDeveloperMode } from "react-icons/md";
import SACert from '../../assets/cert/Coursera TEDC5VLXUJ9R.pdf'
import { SiUnrealengine } from "react-icons/si";
import { SiBlueprint } from "react-icons/si";
import { FiPhone } from "react-icons/fi";

import { FaGitAlt } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";

import { SiRider } from "react-icons/si";
import { BiSolidComponent } from "react-icons/bi";
import { SiAndroidstudio } from "react-icons/si";
import { PiShareNetworkBold } from "react-icons/pi";
import { TbFileCv } from "react-icons/tb";
import gameDevCert from '../../assets/cert/gameCert.JPG'
import saCert from '../../assets/cert/sacert.JPG'
import dlCert from '../../assets/cert/dlcert.JPG'
import ErrorBoundary from "../../ErrorBoundy.jsx";
import MediaCard from "../../Components/MediaCard/MediaCard.jsx";
//This work is based on "Gamepad" (https://sketchfab.com/3d-models/gamepad-6601e19714d349d1892eead6fcc509da) by Citron Vert (https://sketchfab.com/citron.vert) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)


function Home() {
    const { isDarkMode, toggleTheme } = useTheme();
    const modelPath = '../../assets/3d/scene.gltf'; // Specify your model path here
    const modelScale = 2.5; // Specify the scale here
    const certificates = [
        {
            id:1,
            title:"Unreal Engine 5 C++ Developer: Learn C++ & Make Video Games",
            imgSrc:gameDevCert,
            link:"https://www.udemy.com/certificate/UC-f7a898dd-e411-4ecf-aac0-af59253ebe04/"
        },
        {
            id:2,
            title:"Software Architecture",
            imgSrc:saCert,
            link:"https://www.coursera.org/account/accomplishments/verify/TEDC5VLXUJ9R"
        },
        {
            id:3,
            title:"Neural Networks and Deep Learning",
            imgSrc:dlCert,
            link:"https://www.coursera.org/account/accomplishments/verify/3M6E7EC9YUM6"
        }
    ]
    const projects = [
        {
            videoSrc:FPSVideo,
            title: "Sample FPS Game",
            description:'A sample FPS game developed using both C++ and blueprint,',
            timeInMonths:2,
            year:2020,
            link: "/project",
            teamSize:1,
            state: '',
        },
        {
            videoSrc:RPGVideo,
            title: "RPG Game",
            description:'A sample FPS game developed using blueprint,',
            timeInMonths:2,
            year:2024,
            teamSize:2,
            link: "/project3",
            state: 'In progress',
        },
        {
            videoSrc:TPSVideo,
            title: "Third Person Shooter Game",
            description:'A sample TPS game developed using both C++ and blueprint,',
            timeInMonths:2,
            year:2024,
            link: "/project2",
            teamSize:1,
            state: 'In progress',
        },
    ]
    return (
        <>
            <div className={`containerImg ${isDarkMode ? "" : ""}`}>
                <br/>
                <br/>
                <br/>
                <p className={'main-title'}>
                    Welcome! I’m ZERROUK Ahmed, a dedicated game developer specializing in Unreal Engine with a strong
                    command of both C++ and Blueprints.<br></br> Skilled in scripting, environmental design, and
                    gameplay mechanics, I thrive on bringing imaginative worlds to life through polished, immersive
                    experiences.<br/> Whether it’s crafting atmospheric settings or fine-tuning gameplay, I’m here to
                    make each project unforgettable.
                </p>

            </div>
            <div className="title-with-model">
                <div style={{width: '200px', height: '200px', zIndex: 10}}>
                    <ErrorBoundary>
                        <Scene color={isDarkMode ? "#ececec" : "#717171"} modelPath={'/3d/scene.gltf'}
                               position={[0, 0, 0.22]}/>
                    </ErrorBoundary>
                </div>
                <h3 className={`title ${isDarkMode ? "dark" : "light"}`}>My Projects</h3>
            </div>
            <CardGrid cardsData={projects}/>
            <div className="title-with-model">
                <div style={{width: '200px', height: '200px', zIndex: 10}}>
                    <ErrorBoundary>
                        <Scene color={isDarkMode ? "#ececec" : "#717171"} modelPath={'/3d/model2/scene.gltf'}
                               position={[0, 0, 40]}/>
                    </ErrorBoundary>
                </div>
                <h4 className={`title ${isDarkMode ? "dark" : "light"}`}>GameDev Skills And Tools</h4>
            </div>
            <div className={"skill-container"}>
                <div className={"skill"}>
                    <SiCplusplus size="100"/>
                    <p>C++ Programming Language</p>
                </div>
                <div className={"skill"}>
                    <SiUnrealengine size="100"/>
                    <p>Unreal Engine</p>
                </div>
                <div className={"skill"}>
                    <SiBlueprint size="100"/>
                    <p>Blueprint Visual Scripting</p>
                </div>

                <div className={"skill"}>
                    <FaGitAlt size="100"/>
                    <p>Git</p>
                </div>
                <div className={"skill"}>
                    <DiVisualstudio size="100"/>
                    <p>Visual Studio</p>
                </div>
                <div className={"skill"}>
                    <SiRider size="100"/>
                    <p>JetBrains Rider</p>
                </div>
            </div>
            <div className="title-with-model">
                <h4 className={`title ${isDarkMode ? "dark" : "light"}`}>Other</h4>
            </div>
            <div className={"skill-container"}>
                <div className={"skill"}>
                    <MdDeveloperMode size="100"/>
                    <p>Design Patterns</p>
                </div>
                <div className={"skill"}>
                    <BiSolidComponent size="100"/>
                    <p>Software Architecture</p>
                </div>
                <div className={"skill"}>
                    <BsNvidia size="100"/>
                    <p>cuda</p>
                </div>
                <div className={"skill"}>
                    <SiAndroidstudio size="100"/>
                    <p>Android Development Java/Kotlin</p>
                </div>
                <div className={"skill"}>
                    <PiShareNetworkBold size="100"/>
                    <p>Deep learning enthusiast</p>
                </div>
            </div>
            <div className="title-with-model">
                <h4 className={`title ${isDarkMode ? "dark" : "light"}`}>My Certificates</h4>
            </div>
            <div className="container-grid">
                {certificates.map((cardInf, index) => (
                    <MediaCard cardInfo={cardInf}/> // Use index only if no unique ID is available
                ))}
            </div>
            <div className="title-with-model">
                <h4 className={`title ${isDarkMode ? "dark" : "light"}`}>Contacts</h4>
            </div>
            <div className={"contact-container"}>
                <div className={"contact"}>
                    <a href={"https://www.linkedin.com/in/ahmed-zerrouk-a8575b2b6/"}>
                        <CiLinkedin size="50" style={{color: '#4abbff'}}/>
                    </a>
                </div>
                <div className={"contact"}>
                    <a href={"https://github.com/ahmedzer"}>
                        <VscGithubAlt size="50" style={{color: '#4abbff'}}/>
                    </a>
                </div>
                <div className="contact">
                    <a href="mailto:ahmedev59@gmail.com">
                        <CgMail size="50" style={{color: '#4abbff'}}/>
                    </a>
                </div>
                <div className="contact">
                    <a href="tel:+33744943759">
                        <FiPhone size="50" style={{color: '#4abbff'}}/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Home;
