import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <NavLink 
                        to="/" 
                        exact 
                        style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
                    >
                        Home
                    </NavLink>
                </li>
                <li style={styles.navItem}>
                    <NavLink 
                        to="/about" 
                        style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
                    >
                        About
                    </NavLink>
                </li>
                <li style={styles.navItem}>
                    <NavLink 
                        to="/projects" 
                        style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
                    >
                        Projects
                    </NavLink>
                </li>
                <li style={styles.navItem}>
                    <NavLink 
                        to="/skills" 
                        style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
                    >
                        Skills
                    </NavLink>
                </li>
                <li style={styles.navItem}>
                    <NavLink 
                        to="/experience" 
                        style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
                    >
                        Experience
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

// Inline styles for Navbar
const styles = {
    nav: {
        backgroundColor: '#0e6e55', // Navbar background color
        padding: '10px 20px',
    },
    navList: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-around',
    },
    navItem: {
        padding: '10px 15px',
    },
    link: {
        color: '#fff', // Link color
        textDecoration: 'none', // Remove underline
        fontSize: '1.2em', // Font size for links
    },
    activeLink: {
        color: '#fff',
        textDecoration: 'underline', // Underline active link
        fontWeight: 'bold', // Make it bold
    },
};

export default Navbar;
