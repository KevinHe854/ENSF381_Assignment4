import React from 'react';
import { useNavigate } from "react-router-dom";
import './Header.css';

function Header() {
    const navigate = useNavigate();

    return (
        <header className="header">
            <img src="/images/logo.jpg" alt="LMS Logo" className="logo"/>
            <nav>
                <a href="/" className="navLink" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
                    Home
                </a>
                <a href="/courses" className="navLink" onClick={(e) => { e.preventDefault(); navigate('/courses'); }}>
                    Courses
                </a>
                <a href="/login" className="navLink" onClick={(e) => { e.preventDefault(); navigate('/login'); }}>
                    Login
                </a>
            </nav>

        </header>
    );
}

export default Header;