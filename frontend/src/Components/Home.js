import React, { useState, useEffect } from 'react'; 

const Home = () => {
    // State hooks for managing testimonials and current index
    const [testimonials, setTestimonials] = useState([
        "ChatConnect has revolutionized our team's communication!",
        "The best chat application we've used so far.",
        "Seamless, reliable, and easy to use."
    ]);
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    
    // Effect hook for changing testimonials => every 3 seconds
    useEffect(() => {
        const testimonialInterval = setInterval(() => {
            setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 3000);

        return () => clearInterval(testimonialInterval);
    }, [testimonials.length]);

    return (
        <div className="home-container">
            <section className="hero">
                <h1>Welcome to ChatConnect!</h1>
                <p>Your one-stop solution for seamless communication.</p>
                <a href="/feedback" className="cta-button">Give Feedback</a>
            </section>
            <section className="testimonials">
                <h2>What Our Users Say</h2>
                <p className="testimonial">{testimonials[currentTestimonialIndex]}</p>
            </section>
            <section className="features">
                <h2>Features</h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <h3>Real-time Messaging</h3>
                        <p>Experience instant messaging with zero lag.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Find New Friends</h3>
                        <p>Connect and chat.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Effortless Sync</h3>
                        <p>Your chats stay updated across all your devices, effortlessly.</p>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p>&copy; 2024 ChatConnect. Bringing people together, one message at a time.</p>
            </footer>
        </div>
    );
}

export default Home;
