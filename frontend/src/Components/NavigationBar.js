import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/feedback">Feedback</Link></li>
                <li><Link to="/chat">Chat</Link></li>
                
            </ul>
        </nav>
    );
}

export default NavigationBar;
