import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import Home from './Components/Home';
import Feedback from './Components/FeedBack';
import Chat from './Components/Chat'; 
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/feedback" element={<Feedback />} />
                    <Route path="/chat" element={<Chat />} /> 
                </Routes>
            </div>
        </Router>
    );
}

export default App; 
