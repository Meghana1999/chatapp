import React, { useState, useEffect } from 'react';

const Feedback = () => {
    // State hooks for => managing feedback input and all feedbacks
    const [feedback, setFeedback] = useState('');
    const [allFeedbacks, setAllFeedbacks] = useState([]);
    
    // useEffect hook for fetching feedbacks ---> on component mount
    useEffect(() => {
        fetchFeedbacks();
    }, []);
    
    // Fetching all feedbacks from the server
    const fetchFeedbacks = async () => {
        try {
            const response = await fetch('http://localhost:4000/feedback');
            if (response.ok) {
                const data = await response.json();
                setAllFeedbacks(data);
            } else {
                console.error('Failed to fetch feedbacks');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ feedback })
            });
            if (response.ok) {
                alert('Thank you for your feedback!');
                setFeedback('');
                fetchFeedbacks();
            } else {
                console.error('Failed to send feedback');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="feedback-container">
            <h2>Feedback Page</h2>
            <p>We value your feedback. Please let us know your thoughts below.</p>
            <form onSubmit={handleSubmit} className="feedback-form">
                <label htmlFor="feedback">Your Feedback:</label>
                <textarea 
                    id="feedback"
                    value={feedback}
                    onChange={handleFeedbackChange}
                    rows={4}
                    cols={50}
                    placeholder="Enter your feedback here..."
                />
                <button type="submit" className="submit-button">Submit Feedback</button>
            </form>
            <h3>All Feedbacks:</h3>
            <ul className="feedback-list">
                {allFeedbacks.map((fb, index) => (
                    <li key={index} className="feedback-item">
                        {fb}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Feedback;
