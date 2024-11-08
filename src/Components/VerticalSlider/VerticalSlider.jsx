import "./VerticalSlider.css";
import { useEffect, useState } from "react";
import { useTheme } from '../ThemeContext'; // Import the ThemeContext

function VerticalSlider({ slides }) {
    const { isDarkMode } = useTheme(); // Access the dark mode state from context
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeOut(true); // Start fading out the current slide
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
                setFadeOut(false); // Fade in the new slide
            }, 1000); // Duration matches the CSS transition
        }, 7000); // Change slide every 7 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [slides.length]);

    return (
        <div className={`VerticalSlider ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className={`Myslide ${fadeOut ? 'fade-out' : 'fade-in'}`}>
                <img
                    src={slides[currentIndex].image}
                    alt={`Slide ${currentIndex}`}
                    className={`slide-image ${fadeOut ? 'fade-out2' : 'fade-in'}`}
                />
                <p
                    className={`slide-text ${fadeOut ? 'fade-out' : 'fade-in'}`}
                    style={{ color: isDarkMode ? 'white' : '#404040' }} // Conditional text color
                >
                    <span className={`slide-title ${isDarkMode ? 'dark-mode' : ''}`}>{slides[currentIndex].title}</span><br />
                    {slides[currentIndex].text}
                </p>
            </div>
        </div>
    );
}

export default VerticalSlider;
