import React, { useState } from 'react';
import './HamburgerNav.css';

function HamburgerNav() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <nav className="nav-bar">
            <div className="nav-container">
                <div className="nav-brand">Steak Out</div>
                <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <a href="/">Home</a>
<a href='/login'>Login</a>
                    <a href="/locations">Locations</a>
                    
                </div>
            </div>
        </nav>
    );
}

export default HamburgerNav;
