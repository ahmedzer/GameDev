import './ReservationForm.css';
import React, { useState } from 'react';
import { BsArrowDown } from 'react-icons/bs';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useTheme } from '../ThemeContext'; // Import the theme context

function ReservationForm() {
    const { isDarkMode, toggleDarkMode } = useTheme(); // Use the theme context
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        setIsSuccess(false);
        setIsError(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedDate = new Date(date);
        const today = new Date();

        if (selectedDate <= today) {
            alert('La date du rendez-vous doit être après aujourd\'hui.');
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('address', address);
        formData.append('date', date);
        formData.append('phone', phone);
        formData.append('message', message);

        fetch('https://ajsl-nettoyage.com/src/reservationMailer.php', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                setIsError(false);
                setIsSuccess(true);
                setTimeout(() => {
                    toggleModal();
                }, 2000);
            })
            .catch(error => {
                setIsError(true);
                console.error('Error:', error);
            });
    };

    return (
        <div className={`modal-container ${isDarkMode ? 'dark' : ''}`}>
            <div className="modal-btn">
                <svg width="0" height="0">
                    <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="#fa279f" offset="0%" />
                        <stop stopColor="#16b7e8" offset="100%" />
                    </linearGradient>
                </svg>
                <BsArrowDown className="arrow-icon" style={{ fill: "url(#blue-gradient)" }} />
                <button onClick={toggleModal} className="form-btn">Réserver Maintenant</button>

            </div>

            {isModalOpen && (
                <div className={`modal-overlay ${isDarkMode ? 'dark' : ''}`}>
                    <div className={`modal-content ${isDarkMode ? 'dark' : ''}`}>
                        <button className={`close-button ${isDarkMode ? 'dark' : ''}`} onClick={toggleModal}>Fermer</button>
                        <h2>Formulaire de Réservation</h2>
                        <form onSubmit={handleSubmit} >
                            <input
                                type="text"
                                id="name"
                                className={isDarkMode ? 'dark' : ''}
                                value={name}
                                placeholder="Votre nom et prénom"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                id="address"
                                className={isDarkMode ? 'dark' : ''}
                                value={address}
                                placeholder="Votre adresse"
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                id="email"
                                className={isDarkMode ? 'dark' : ''}
                                value={email}
                                placeholder="Votre email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label htmlFor="date">Date souhaitée</label>
                            <input
                                type="datetime-local"
                                id="date"
                                className={isDarkMode ? 'dark' : ''}
                                min={new Date().toISOString().slice(0, 11) + "09:00"}
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                            <input
                                type="tel"
                                id="phone"
                                className={isDarkMode ? 'dark' : ''}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                placeholder="Votre numéro de téléphone"
                            />
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows="2"
                                className={isDarkMode ? 'dark' : ''}
                                required
                                placeholder="Veuillez décrire votre besoin"
                            />
                            {isError && (
                                <h5 style={{ color: 'red' }}>
                                    Une erreur est survenue lors de la réservation
                                </h5>
                            )}
                            {isSuccess && (
                                <div className="success-message">
                                    <AiOutlineCheckCircle style={{ color: 'green', fontSize: '1.5em' }} />
                                    <span>Réservation réussie !</span>
                                </div>
                            )}
                            <button type="submit" className="form-btn" disabled={isSuccess}>Soumettre</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ReservationForm;
