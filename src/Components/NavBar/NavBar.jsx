import './NavBar.css';
import { useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { useTheme } from '../ThemeContext';
import { AiOutlineSun, AiOutlineMoon } from 'react-icons/ai';
import {Link} from "react-router-dom";

function NavBar() {
    const { isDarkMode, toggleTheme } = useTheme();

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' && !isDarkMode) {
            toggleTheme();
        }
    }, [isDarkMode, toggleTheme]);

    return (
        <Navbar  variant={isDarkMode ? 'dark' : 'light'} expand="md" className={`navBar ${isDarkMode ? 'dark' : 'light'}`}>
            <Container>
                <Navbar.Brand href="/">
                    ZERROUK Ahmed
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavDropdown title="Projects" id="basic-nav-dropdown" menuVariant={isDarkMode ? 'dark' : 'light'}>
                            {/* Static Project Links */}
                            <NavDropdown.Item>
                                <Link to="/project" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    FPS Game
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/project3" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    MGA Project
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/project2" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    TPS Game
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>


                    </Nav>
                    <Button onClick={toggleTheme} variant={isDarkMode ? 'light' : 'dark'} style={{ marginLeft: '10px' }}>
                        {isDarkMode ? <AiOutlineSun size={24} /> : <AiOutlineMoon size={24} />}
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
