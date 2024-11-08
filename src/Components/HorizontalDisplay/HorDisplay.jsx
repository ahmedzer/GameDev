import React, { useEffect, useRef, useState } from 'react';
import './HorDisplay.css';
import { useTheme } from '../ThemeContext'; // Import your ThemeContext

function HorDisplay({ items }) {
    const { isDarkMode } = useTheme(); // Access the dark mode state from context
    const [visibleItems, setVisibleItems] = useState(Array(items.length).fill(false));
    const [showMore, setShowMore] = useState(Array(items.length).fill(false));
    const itemRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const index = Number(entry.target.getAttribute('data-index'));
                if (entry.isIntersecting) {
                    setVisibleItems(prevVisibleItems => {
                        const newVisibleItems = [...prevVisibleItems];
                        newVisibleItems[index] = true;
                        return newVisibleItems;
                    });
                } else {
                    setVisibleItems(prevVisibleItems => {
                        const newVisibleItems = [...prevVisibleItems];
                        newVisibleItems[index] = false;
                        return newVisibleItems;
                    });
                }
            });
        });

        itemRefs.current.forEach(item => {
            observer.observe(item);
        });

        return () => {
            itemRefs.current.forEach(item => {
                observer.unobserve(item);
            });
        };
    }, [items]);

    const toggleShowMore = (index) => {
        setShowMore(prevShowMore => {
            const newShowMore = [...prevShowMore];
            newShowMore[index] = !newShowMore[index];
            return newShowMore;
        });
    };

    return (
        <div className={`horDisplaySection ${isDarkMode ? 'dark-mode' : ''}`} id="services"> {/* Conditional class for dark mode */}
            {items.map((item, index) => (
                <div
                    key={index}
                    id={item.title}
                    className={`itemContainer ${visibleItems[index] ? 'fadeIn' : 'fadeOut'}`}
                    data-index={index}
                    ref={el => itemRefs.current[index] = el}
                >
                    <h1 className="itemTitle">{item.title}</h1>
                    <div className="item">
                        {index % 2 === 0 && (
                            <img className="itemImage" src={item.image} alt="" />
                        )}
                        <p className="itemText">{item.text}</p>
                        {index % 2 === 1 && (
                            <img className="itemImage" src={item.image} alt="" />
                        )}

                        {item.prestations && item.prestations.length > 0 && (
                            <div className="prestation-meta">
                                <div className={`prestationContainer ${showMore[index] ? 'show' : ''}`}>
                                    <ul className="prestationList">
                                        {item.prestations.map((prestation, i) => (
                                            <li key={i} className={`pres-item ${isDarkMode ? 'dark-mode' : ''}`}>{prestation}</li>
                                        ))}
                                    </ul>
                                </div>
                                <button onClick={() => toggleShowMore(index)} className={`showMoreButton ${isDarkMode ? 'dark-mode' : ''}`}>
                                    {showMore[index] ? 'Afficher Moins' : 'Afficher Nos Prestations Pour Ce Service'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HorDisplay;
