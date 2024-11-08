import "./cardGrid.css";
import React, { useState, useRef } from "react";
import { useTheme } from "../ThemeContext.jsx";
import { IoTimeOutline } from "react-icons/io5";
import { GiDarkSquad } from "react-icons/gi";
import { CiCalendarDate } from "react-icons/ci";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function CardGrid({ cardsData }) {
    const { isDarkMode } = useTheme();
    return (
        <div className={`container-grid ${isDarkMode ? 'dark' : 'light'}`}>
            {cardsData.map((card, index) => {
                const videoRef = useRef(null); // Create a ref for the video element
                const [isHovering, setIsHovering] = useState(false); // State to track hovering

                return (
                    <div className={`card ${isDarkMode ? "dark" : "light"}`} key={index}>
                        <div className="card-info">
                            <span className="info-item">
                                <IoTimeOutline size="25"/> {card.timeInMonths} Months
                            </span>
                            <span className="info-item">
                                <GiDarkSquad size="25"/> {card.teamSize}
                            </span>
                            <span className="info-item">
                                <CiCalendarDate size="25"/> {card.year}
                            </span>
                            <span className="info-item">
                                {card.state}
                            </span>
                        </div>

                        <div
                            style={{position: 'relative'}} // Position relative for overlay
                            onMouseEnter={() => {
                                setIsHovering(true); // Set hovering state to true
                                videoRef.current.play(); // Play the video on hover
                            }}
                            onMouseLeave={() => {
                                setIsHovering(false); // Set hovering state to false
                                videoRef.current.pause(); // Pause the video on mouse leave
                            }}
                        >

                            <video
                                ref={videoRef} // Attach the ref to the video element
                                className="card-video"
                                src={card.videoSrc}
                                loop
                                muted
                                width="100%"
                                height="100%"
                            />
                            {!isHovering && (
                                <div className="video-overlay">
                                    <span className="overlay-text">Hover to Play</span>
                                </div>
                            )}
                        </div>

                        <div className="card-content">
                            <h2 className={`card-title ${isDarkMode ? 'dark' : 'light'}`}>{card.title}</h2>
                            <p className="card-description">{card.description}</p>
                            <Link to={card.link}>
                                <Button size="small">Show project</Button>
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default CardGrid;
